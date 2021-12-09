const {authJwt} = require('../middlewares')
const controller = require('../controllers/product.controller')
const router = require('express').Router()

module.exports = app => {
    router.post('/', [authJwt.verifyToken, authJwt.isCanModify], controller.create)

    router.put('/:id', [authJwt.verifyToken, authJwt.isCanModify], controller.update)

    router.get('/', controller.findAll)
    router.get('/:id', controller.findOne)

    router.delete('/:id', [authJwt.verifyToken, authJwt.isCanModify], controller.delete)

    app.use('/api/v1/products', router)

}