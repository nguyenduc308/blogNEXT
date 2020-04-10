const formidable = require('formidable')
const slugify = require('slugify')
const stripHtml = require('string-strip-html')
const _ = require('lodash')
const fs = require('fs')

const { errorHandler } = require('../helpers/errBdHandler')
const { Blog } = require('../models/blog')
const { Category } = require('../models/category')
const { Tag } = require('../models/tag')
const { smartTrim } = require('../helpers/blogHelper')

exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {{
        if(err) {
            return res.status(400).json({
                error: 'Image could not upload'
            })
        }
        const { title, body, categories, tags } = fields;
        if(!title || title.length === 0 || !body || body.trim().length===0) {
            return res.status(400).json({
                error: "Title or body is required"
            })
        }
        let blog = new Blog()
        blog.title = title
        blog.body = body
        blog.exerpt = smartTrim(body, 160, ' ', '...')
        blog.slug = slugify(title).toLowerCase()
        blog.metaTitile = `${title} | DucLux.Com`
        blog.metaDesc = stripHtml(body.substring(0, 160))
        blog.author = req.user._id
        
        let categoryArr = categories && categories.split(',');
        let tagArr = tags && tags.split(',');

        if(files.photo) {
            if(files.photo.size > 5000000) {
                return res.status(400).json({
                    error: 'Image shoud be less than 5mb'
                })
            }
            blog.photo.data = fs.readFileSync(files.photo.path)
            blog.photo.contentType = files.photo.type
        }
        blog.save()
            .then(blog=> {
                blog.categories = categoryArr;
                blog.tags = tagArr;
                return blog.save()
            })
            .then(blog => res.status(201).json(blog))
            .catch(err => {{
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }})
    }})
}

exports.getBlogs = (req, res) => {
    Blog.find()
        .populate('categories', '_id name slug')
        .populate('tag', '_id name slug')
        .populate('author', '_id name username profile')
        .select('_id title exerpt slug categories tag author createdAt updatedAt')
        .then(blogs => {
            res.status(200).json(blogs)
        })
        .catch(err => res.status(500).json({error: errorHandler(err)}))
}
exports.getAll = (req, res) => {
    let {limit, page} = req.body
    console.log(limit, page);
    limit = limit ? parseInt(limit) : 10
    page = page ? parseInt(page) : 1
    let blogs, categories, tags
    Blog.find()
        .populate('categories', '_id name slug')
        .populate('tag', '_id name slug')
        .populate('author', '_id name username profile')
        .sort({createdAt: -1})
        .limit(limit)
        .skip(limit*(page-1))
        .select('_id title exerpt slug categories tag author createdAt updatedAt')
        .then(_blogs => {
            blogs = _blogs
            return Category.find()
        })
        .then(_categories => {
            categories = _categories
            return Tag.find()
        })
        .then(_tags => {
            tags = _tags
            res.status(200).json({blogs, categories, tags, size: blogs.length})
        })
        .catch(err => res.status(500).json({error: errorHandler(err)}))

}
exports.getBlogBySlug = (req, res) => {
    const slug  = req.params.slug.toLowerCase();
    Blog.findOne({slug})
        .populate('categories', '_id name slug')
        .populate('tag', '_id name slug')
        .populate('author', '_id name username profile')
        .select('_id title slug body metaTitle metaDesc categories tag author createAt updateAt')
        .then(blog => {
            res.status(200).json(blog)
        })
        .catch(err => res.status(500).json({error: errorHandler(err)}))
}
exports.deleteBlogBySlug = (req, res) => {
    const slug  = req.params.slug.toLowerCase();
    Blog.deleteOne({slug})
        .then(() => {
            res.status(200).json({msg: "Delete success"})
        })
        .catch(err => res.status(500).json({error: errorHandler(err)}))
}
exports.updateBlogBySlug = (req, res) => {
    const slug  = req.params.slug.toLowerCase();
    Blog.findOne({slug})
        .then(blog=> {
            let form = new formidable.IncomingForm()
            form.keepExtensions = true
            form.parse(req, (err, fields, files) => {{
                if(err) {
                    return res.status(400).json({
                        error: 'Image could not upload'
                    })
                }
                const { title, body, categories, tags } = fields;
                if(!title || title.length === 0 || !body || body.trim().length===0) {
                    return res.status(400).json({
                        error: "Title or body is required"
                    })
                }
                blog.title = title
                blog.body = body
                blog.exerpt = smartTrim(body, 160, ' ', '...')
                blog.slug = slugify(title).toLowerCase()
                blog.metaTitile = `${title} | DucLux.Com`
                blog.metaDesc = stripHtml(body.substring(0, 160))
                blog.author = req.user._id
                
                let categoryArr = categories && categories.split(',');
                let tagArr = tags && tags.split(',');
        
                if(files.photo) {
                    if(files.photo.size > 5000000) {
                        return res.status(400).json({
                            error: 'Image shoud be less than 5mb'
                        })
                    }
                    blog.photo.data = fs.readFileSync(files.photo.path)
                    blog.photo.contentType = files.photo.type
                }
                return blog.save()
                    .then(blog=> {
                        blog.categories = categoryArr;
                        blog.tags = tagArr;
                        return blog.save()
                    })
            }})
        })
        .then(blog => res.status(201).json(blog))
        .catch(err=> res.status(500).json({error:errorHandler(err)}))
}
exports.getPhoto = (req, res) => {
    const slug  = req.params.slug.toLowerCase();
    Blog.findOne({slug})
        .select('photo')
        .then(blog => {
            res.set('Content-Type', blog.photo.contentType)
            return res.send(blog.photo.data)
        })
        .catch(err => res.status(500).json({error: errorHandler(err)}))
}
exports.postsRelated = (req,res) => {
    let limit=req.body.limit ? parseInt(req.body.limit) : 3
    const { _id, categories } = req.body.blog;
    Blog.find({_id: {$ne: _id}, categories:{$in: categories}})
        .limit(limit)
        .populate('author', '_id name profile')
        .select('title excerpt slug author createdAt')
        .then(blogs => {
            res.status(200).json(blogs)
        })
        .catch(err=> res.json({error: 'blogs not found'}))
}