module.exports = app => {
    const post = require('../controllers/post.controller')
    const router = require('express').Router()

    router.post('/', post.create)

    router.get('/', post.findAll)
    router.get('/published', post.findAllPublished)
    router.get('/:id', post.findOne)


    router.put('/published/:id', post.setPublished)
    router.put('/:id', post.update)
    router.put('/:id/comments', post.addComment)

    app.use('/api/v1/posts', router)
}