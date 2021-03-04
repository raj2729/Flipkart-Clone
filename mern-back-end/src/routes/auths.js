const express = require('express');
const router = express.Router();

const { signup , signin , requireSignin } = require('../controllers/auth');

router
  .route('/signin')

  .post( signin )

router
  .route('/signup')

  .post(signup) 

// router
//   .route('/profile')

//   .post(requireSignin , (req,res,next) => {
//      res.status(200).json({
//       user : "profile"
//     })
//   }  ) 

module.exports = router;