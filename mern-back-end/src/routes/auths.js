const express = require('express');
const router = express.Router();

const { signup , signin } = require('../controllers/auth');

router
  .route('/signin')

  .post( signin )

router
  .route('/signup')

  .post(signup) 

module.exports = router;