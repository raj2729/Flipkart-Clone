const express = require('express');
const router = express.Router();

const { signup , signin , requireSignin } = require('../../controllers/admin/auth');

router
  .route('/admin/signin')

  .post( signin )

router
  .route('/admin/signup')

  .post(signup) 


module.exports = router;