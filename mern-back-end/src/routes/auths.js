const express = require('express');
const router = express.Router();

const { signup , signin , requireSignin } = require('../controllers/auth');

const { validateSignupRequest , validateSigninRequest , isRequestValidated } = require('../validators/auth');

router
  .route('/signin')

  .post(validateSigninRequest , isRequestValidated , signin )

router
  .route('/signup')
  
  .post(validateSignupRequest , isRequestValidated , signup) 

// router
//   .route('/profile')

//   .post(requireSignin , (req,res,next) => {
//      res.status(200).json({
//       user : "profile"
//     })
//   }  ) 

module.exports = router;