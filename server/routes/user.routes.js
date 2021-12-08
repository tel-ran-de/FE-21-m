const {authJwt} = require('../middlewares')
const controller = require('../controllers/user.controller')
const router = require('express').Router()

module.exports = app => {
    router.get('/', [authJwt.verifyToken, authJwt.isAdmin], controller.findAll)
    router.get('/:id', [authJwt.verifyToken, authJwt.isCanShowUserInfo], controller.findOne)

    router.put('/:id/change-role', [authJwt.verifyToken, authJwt.isAdmin], controller.changeRole)

    app.use('/api/v1/users', router)

}