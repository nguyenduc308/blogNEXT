const express = require('express');
const router = express.Router();
const { requrieSignIn, authenticate } = require('../controllers/auth')
const { read } = require('../controllers/user') 
router.get(
    '/',
    requrieSignIn,
    authenticate,
    read
)
module.exports = router;
