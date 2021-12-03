module.exports = app => {
    const post = require('../controllers/post.controller')
    const router = require('express').Router()

    router.post('/', post.create)

    router.get('/', post.findAll)
    router.get('/published', post.findAllPublished)
    router.get('/:id', post.findOne)

    router.put('/published/:id', post.setPublished)
    router.put('/comments/:id', post.addComment)
    router.put('/:id', post.update)

    app.use('/api/v1/posts', router)
}