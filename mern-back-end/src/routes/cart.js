const express = require('express');
const router = express.Router();
const { addItemToCart } = require('../controllers/cart');
const {requireSignin , userMiddleware } = require('../common-middlewares/index');
// const { signup , signin } = require('../controllers/auth');

// const { validateSignupRequest , validateSigninRequest , isRequestValidated } = require('../validators/auth');

router
  .route('/user/cart/add-to-cart')

  .post( requireSignin , userMiddleware , addItemToCart )

// router
//   .route('/category/getcategory')

//   .get(getCategories )


module.exports = router