const db = require('../models')
const Product = db.product

exports.findAll = (req, res) => {
    Product.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Product.findByPk(id)
        .then(data => {
            if (data) {
                return res.send(data)
            }
            res.status(404).send({message: 'Product not found'})
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}