const { Category } = require('../models/category');
const slugify = require('slugify')
const { errorHandler } = require('../helpers/errBdHandler')
exports.create = (req, res) => {
    const { name } = req.body;
    const slug = slugify(name).toLowerCase();

    const category = new Category({name, slug})
    category.save()
        .then(category => res.status(201).json({category}))
        .catch(err => res.status(500).json({error: errorHandler(err)}))
}
exports.listCategories = (req, res) => {
    Category.find()
        .then(categories => {
            return res.status(200).json(categories)
        })
        .catch(err => res.status(500).json({error: "Server error"}))
}

exports.getCategoryBySlug = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Category.findOne({slug})
        .then(category => res.status(200).json(category))
        .catch(err => res.status(500).json({error: errorHandler(err)}))
}
exports.deleteCategoryBySlug = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Category.deleteOne({slug})
        .then(() => res.json({msg: "Deleted success"}))
        .catch(err => res.status(500).json({error: errorHandler(err)}) )
}
