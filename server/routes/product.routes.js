const {authJwt} = require('../middlewares')
const controller = require('../controllers/product.controller')
const router = require('express').Router()

module.exports = app => {
    router.get('/', controller.findAll)
    router.get('/:id', controller.findOne)

    app.use('/api/v1/products', router)

}