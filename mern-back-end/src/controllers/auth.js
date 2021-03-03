const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = async (req,res,next) => {
  await User.findOne({ email : req.body.email }).exec((error , user) => {
    if(user) 
    {
      return res.status(400).json({
        message : "User Already exists"
      })
    }
  
    const {firstName,lastName,email,password,role,fullName,contactNumber,profilePicture} = req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      userName : Math.random().toString() ,
      role,
      contactNumber,
      profilePicture
    });
    _user.save((error , data) => {
      if(error)
      {
        return res.status(400).json({
          message : error
        })
      }
      if(data){
        return res.status(201).json({
          message : "User account created successfully"
        })
      }
    })
    
  })
}

exports.signin = async (req,res,next) => {

  await User.findOne({ email : req.body.email }).exec((error , user) => {
    if(error)
    {
      return res.status(400).json({
        error : error
      })
    }

    if(user)
    {
      // authenticate present in user models
      if(user.authenticate(req.body.password))
      {
        const token = jwt.sign({_id : user._id } , process.env.JWT_SECRET , {expiresIn : '1h'} )// '1d' => 1 day
        const {_id,firstName,lastName,email,password,fullName,role,contactNumber,profilePicture} = user;

        res.status(200).json({
          token,
          user : {
            _id,firstName,lastName,email,password,fullName,role,contactNumber,profilePicture
          }
        })

      }
      else{
        res.status(400).json({
          message : "Invalid Password"
        })
      }
    }
    else
    {
      return res.status(400).json({
        message : "Something went wrong"
      })
    }
  })

}