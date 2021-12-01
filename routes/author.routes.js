const author = require("../controller/author.controler");
module.exports = app => {
    const author = require('../controller/author.controler')
    const router = require('express').Router()

    router.post("/", author.create)

    router.get('/', author.findAll)
    router.get('/active', author.findActive)
    router.get('/:id', author.findOne)

    router.put('/:id', author.update)

    router.delete('/:id', author.delete)

    app.use('/api/v1/authors', router)
}

/*

http://localhost:8080/api/v1/authors/245

 */