const book = require("../controller/book.controller");
module.exports = app => {
    const book = require('../controller/book.controller')
    const router = require('express').Router()

    router.post("/", book.create)

    router.get('/', book.findAll)
    router.get('/active', book.findActive)
    router.get('/search/:q', book.findByTitlePart)
    router.get('/:id', book.findOne)


    router.put('/:id', book.update)

    router.delete('/:id', book.delete)

    app.use('/api/v1/books', router)
}