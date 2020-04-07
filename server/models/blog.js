const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        max: 225,
        min: 1,
        index: true,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        index: true
    },
    body: {
        type: {},
        required: true,
    },
    exerpt: {
        type: String,
        max: 1000
    },
    metaTitle: {
        type: String,
    },
    metaDesc: {
        type: String
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    categories: [{type: ObjectId, ref: 'Category', required: true}],
    tags: [{type: ObjectId, ref: 'Tag', required: true}],
    author: {
        type: ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})
const Blog = mongoose.model('Blog', blogSchema, 'blogs');

module.exports = {
        Blog
}