const {authJwt} = require('../middlewares')
const controller = require('../controllers/company.controller')
const router = require('express').Router()

module.exports = app => {

    router.post('/', [authJwt.verifyToken, authJwt.isCanModify], controller.create)

    router.get('/', controller.findAll)
    router.get('/:id', controller.findOne)

    router.put('/:id', [authJwt.verifyToken, authJwt.isCanModify], controller.update)

    router.delete('/:id', [authJwt.verifyToken, authJwt.isCanModify], controller.delete)


    app.use('/api/v1/companies', router)

}