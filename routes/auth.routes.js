const controller = require('../controller/auth.controller')
const verifySignUp = require("../middlewares/verifySignUp");
const router = require('express').Router()
module.exports = app => {

    router.post('/signup',[verifySignUp.checkDuplicateEmail], controller.signup)
    router.post('/signin', controller.signin)

    app.use('/api/v1/auth', router)
}