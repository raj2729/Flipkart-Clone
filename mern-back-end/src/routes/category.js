const express = require('express');
const router = express.Router();
const multer = require('multer');
// For file upload
const shortid = require('shortid');
const path = require('path');

const { addCategory , getCategories } = require('../controllers/category');
const {requireSignin , adminMiddleware } = require('../common-middlewares/index');
// const { signup , signin } = require('../controllers/auth');

// const { validateSignupRequest , validateSigninRequest , isRequestValidated } = require('../validators/auth');

const storage = multer.diskStorage({
  destination : function ( req , file , cb ) {
    cb(null , path.join(path.dirname(__dirname) , 'uploads/' ) );
  },
  filename : function ( req , file , cb ) {
     cb(null , shortid.generate() + '-' + file.originalname);   
  }
})

const upload = multer({
  // dest : 'uploads/'
  storage
})

router
  .route('/category/create')

  .post( requireSignin , adminMiddleware , upload.single('categoryImage') , addCategory )

router
  .route('/category/getcategory')

  .get(getCategories )


module.exports = router