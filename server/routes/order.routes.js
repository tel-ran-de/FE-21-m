const {authJwt} = require('../middlewares')
const controller = require('../controllers/order.controller')
const router = require('express').Router()

module.exports = app => {
    router.get('/', controller.findAll)
    router.get('/:id', controller.findOne)

    router.post('/', [authJwt.verifyToken, authJwt.isCanModify], controller.create)

    app.use('/api/v1/orders', router)

}