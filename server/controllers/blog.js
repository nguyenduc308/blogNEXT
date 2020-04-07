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
                error: "title and body are required"
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