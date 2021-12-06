const authJwt = require("../middlewares/authJwt");
module.exports = app => {
    const author = require('../controller/author.controller')
    const router = require('express').Router()

    router.post("/",[authJwt.verifyToken], author.create)

    router.get('/', author.findAll)
    router.get('/active', author.findActive)
    router.get('/:id', author.findOne)

    router.put('/:id',[authJwt.verifyToken], author.update)

    router.delete('/:id',[authJwt.verifyToken], author.delete)

    app.use('/api/v1/authors', router)
}

/*

http://localhost:8080/api/v1/authors/245

 */