const express = require('express');
const router = express.Router();

const { signup , signin  } = require('../../controllers/admin/auth');
const { validateSignupRequest , validateSigninRequest , isRequestValidated } = require('../../validators/auth');

router
  .route('/admin/signin')

  .post( validateSigninRequest , isRequestValidated , signin )

router
  .route('/admin/signup')

  .post( validateSignupRequest , isRequestValidated , signup) 


module.exports = router;