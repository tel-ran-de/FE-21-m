const {authJwt} = require('../middlewares')
const controller = require('../controllers/user.controller')
const router = require('express').Router()

module.exports = app => {
    router.get('/', [authJwt.verifyToken], controller.findAll)
    router.get('/:id', [authJwt.verifyToken], controller.findOne)

    router.put('/:id/change-role', [authJwt.verifyToken, authJwt.isAdmin], controller.changeRole)

    app.use('/api/v1/users', router)

}