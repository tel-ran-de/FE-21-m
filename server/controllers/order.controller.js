const db = require('../models')
const Order = db.order
const OrderDetail = db.orderDetail

exports.create = (req, res) => {
    /*
    req.userId -> user_id
    req.body.company_id -> company_id
    null -> status => 'new'

    [
        {
            req.body.list[].product_id => orderDetails.product_id
            req.body.list[].quantity => orderDetails.quantity
        }
    ]
     */

    if (!req.body.company_id) {
        return res.send(400).send({message: 'Company id is required'})
    }
    if (!req.body.list.length) {
        return res.send(400).send({message: 'Need one product to create order'})
    }
    const createOrder = {
        company_id: req.body.company_id,
        user_id: req.userId,
        status: 'new'
    }
    Order.create(createOrder, {
        include: ['user', 'company', {association: Order.list, include:['product']}]
    })
        .then(data => {
            const orderId = data.dataValues.id
            req.body.list.forEach(item => {
                OrderDetail.create({
                    order_id: orderId,
                    product_id: item.product_id,
                    quantity: item.quantity,
                })
                    .then(detail => {

                    })
                    .catch(err => {
                        return res.status(500).send({message:err.message})
                    })
            })
            Order.findByPk(orderId, {
                include: ['user', 'company', {association: Order.list, include:['product']}]
            })
                .then(data => {
                    if (data) {
                        return res.send(data)
                    }
                    res.status(404).send({message: 'Order not found'})
                })
                .catch(err => {
                    res.status(500).send({message: err.message})
                })
        })
        .catch(err => {
            res.status(500).send({message:err.message})
        })

}

exports.findAll = (req, res) => {
    Order.findAll({
            include: ['user', 'company']
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Order.findByPk(id, {
            include: ['user', 'company', {association: Order.list, include:['product']}]
    })
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