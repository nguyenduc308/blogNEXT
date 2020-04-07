const { Tag } = require('../models/tag');
const slugify = require('slugify')
const { errorHandler } = require('../helpers/errBdHandler')
exports.create = (req, res) => {
    const { name } = req.body;
    const slug = slugify(name).toLowerCase();

    const tag = new Tag({name, slug})
    tag.save()
        .then(tag => res.status(201).json({tag}))
        .catch(err => res.status(500).json({error: errorHandler(err)}))
}
exports.listTags = (req, res) => {
    Tag.find()
        .then(tags => {
            return res.status(200).json(tags)
        })
        .catch(err => res.status(500).json({error: "Server error"}))
}

exports.getTagBySlug = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Tag.findOne({slug})
        .then(tag => res.status(200).json(tag))
        .catch(err => res.status(500).json({error: errorHandler(err)}))
}
exports.deleteTagBySlug = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Tag.deleteOne({slug})
        .then(() => res.json({msg: "Deleted success"}))
        .catch(err => res.status(500).json({error: errorHandler(err)}) )
}
