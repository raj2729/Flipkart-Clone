const Product = require('../models/product');
const shortid = require('shortid');
const slugify = require('slugify');

exports.createProduct = (req , res, next) => {
  const { name , price , description , quantity , category , createdBy } = req.body;

  let productPictures=[];
  if(req.files.length > 0){
    productPictures = req.files.map(file => {
      return {
        img : file.filename
      }
    })
  }

  const product = new Product ({
    name : req.body.name,
    slug : slugify(name),
    price ,
    description , 
    quantity ,
    productPictures , 
    category , 
    createdBy : req.user._id
    
  })

  // res.status(200).json({
  //   // file : req.file,// For single File upload data
  //   file : req.files,//For multiple files
  //   body : req.body
  // })

  product.save((error , product) => {
    if(error)
    {
      res.status(400).json({
        error : error
      })
    }

    if(product)
    {
      res.status(200).json({
        product
      })
    }
  })

}