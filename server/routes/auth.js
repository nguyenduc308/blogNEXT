const express = require('express');
const router = express.Router();
const { signUp, signIn, signOut } = require('../controllers/auth')
const { runValidater } = require('../validators')
const { userSignupValidator, userSignInValidator } = require('../validators/auth')
router.post(
    '/signup',
    userSignupValidator,
    runValidater,
    signUp
)
router.post(
    '/signin',
    userSignInValidator,
    runValidater,
    signIn
)
router.post('/signout', signOut)
module.exports = router;
