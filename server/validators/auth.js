const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters'),
]
exports.userSignInValidator = [
    check('email')
        .isEmail()
        .withMessage('Email or Passwrod do not match'),
    check('password')
        .isLength({min: 6})
        .withMessage('Email or Passwrod do not match'),
]

