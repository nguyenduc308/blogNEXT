const express = require('express');
const router = express.Router();

// router.use('/blog', require('./blog'))
router.use('/auth', require('./auth'));
router.use('/profile', require('./user'));
router.use('/categories', require('./category'));
router.use('/tags', require('./tag'));
router.use('/posts', require('./blog'));

module.exports = router;
