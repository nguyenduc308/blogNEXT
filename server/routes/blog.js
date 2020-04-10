const express = require('express');
const router = express.Router();
const { requrieSignIn, authorize } = require('../controllers/auth')
const { create, getAll, getBlogs, getBlogBySlug, deleteBlogBySlug, updateBlogBySlug, getPhoto, postsRelated } = require('../controllers/blog')
router.post(
    '/', 
    requrieSignIn,
    authorize,
    create
)
router.get(
    '/', 
    getBlogs
)
router.post(
    '/all', 
    getAll
)
router.get(
    '/:slug', 
    getBlogBySlug
)
router.delete(
    '/:slug', 
    requrieSignIn,
    authorize,
    deleteBlogBySlug
)
router.put(
    '/:slug', 
    requrieSignIn,
    authorize,
    updateBlogBySlug
)
router.get(
    '/photo/:slug', 
    getPhoto
)
router.post(
    '/related',
    postsRelated
)

module.exports = router;
