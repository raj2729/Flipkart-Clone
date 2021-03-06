const express = require('express');
const router = express.Router();
const { addCategory , getCategories } = require('../controllers/category');
const {requireSignin , adminMiddleware } = require('../common-middlewares/index');
// const { signup , signin } = require('../controllers/auth');

// const { validateSignupRequest , validateSigninRequest , isRequestValidated } = require('../validators/auth');

router
  .route('/category/create')

  .post( requireSignin , adminMiddleware , addCategory )

router
  .route('/category/getcategory')

  .get(getCategories )


module.exports = router