const db = require('../models')
const Order = db.order

exports.findAll = (req, res) => {
    Order.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Order.findByPk(id)
        .then(data => {
            if (data) {
                return res.send(data)
            }
            res.status(404).send({message: 'Order not found'})
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}