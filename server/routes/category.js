const express = require('express');
const router = express.Router();
const { create, listCategories, deleteCategoryBySlug, getCategoryBySlug  } = require('../controllers/category')
const { runValidater } = require('../validators')
const { categoryCreateValidator } = require('../validators/category')
const { requrieSignIn, authorize } = require('../controllers/auth')

router.post(
    '/',
    categoryCreateValidator,
    runValidater,
    requrieSignIn,
    authorize,
    create
)
router.get('/', listCategories)
router.get('/:slug', getCategoryBySlug)
router.delete(
    '/:slug', 
    requrieSignIn,
    authorize, 
    deleteCategoryBySlug
)

module.exports = router;
