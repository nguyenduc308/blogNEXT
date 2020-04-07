const express = require('express');
const router = express.Router();
const { create, listTags, deleteTagBySlug, getTagBySlug  } = require('../controllers/tag')
const { runValidater } = require('../validators')
const { tagCreateValidator } = require('../validators/tag')
const { requrieSignIn, authorize } = require('../controllers/auth')

router.post(
    '/',
    tagCreateValidator,
    runValidater,
    requrieSignIn,
    authorize,
    create
)
router.get('/', listTags)
router.get('/:slug', getTagBySlug)
router.delete(
    '/:slug', 
    requrieSignIn,
    authorize, 
    deleteTagBySlug
)

module.exports = router;
