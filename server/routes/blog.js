const express = require('express');
const router = express.Router();
const { requrieSignIn, authorize } = require('../controllers/auth')
const { create } = require('../controllers/blog')
router.post(
    '/', 
    requrieSignIn,
    authorize,
    create
)

module.exports = router;
