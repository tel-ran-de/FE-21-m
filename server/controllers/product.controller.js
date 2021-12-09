const db = require('../models')
const Product = db.product

exports.create = (req, res) => {
    if (!req.body.name || !req.body.price) return res.status(400).send({message: 'Product Name and Price are required'})

    Product.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

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


exports.update = (req, res) => {
    const id = req.params.id

    Product.update(req.body, {
        where: {
            id
        }
    })
        .then(num => {
            if (+num!==1) {
                return res.status(404).send({message: 'Product not found'})
            }
            Product.findByPk(id)
                .then(data => {
                    res.send(data)
                })
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Product.update({isActive: 0}, {
        where: {
            id
        }
    })
        .then(num => {
            if (+num!==1) {
                return res.status(404).send({message: 'Product not found'})
            }
            Product.findByPk(id)
                .then(data => {
                    res.send(data)
                })
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}