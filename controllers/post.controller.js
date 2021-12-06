const db = require('../models')
const Post = db.post

exports.create = (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({message: 'Title cannot be empty'})
    }
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        published: req.body.published ?? false,
        comments: []
    })

    post.save(post)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findAll = (req, res) => {
    Post.find({})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Post.findById(id)
        .then(data => {
            if (!data) {
                return res.status(404).send({message: 'Post not found'})
            }
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: 'Data to update cannot be empty'})
    }
    const id = req.params.id
    Post.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                return res.status(404).send({message: 'Post not found'})
            }
            Post.findById(id)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.status(500).send({message: err.message})
                })

        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })

}

exports.findAllPublished = (req, res) => {
    Post.find({published:true})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.setPublished = (req, res) => {
    const id = req.params.id
    Post.findByIdAndUpdate(id, {published:true}, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                return res.status(404).send({message: 'Post not found'})
            }
            Post.findById(id)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.status(500).send({message: err.message})
                })

        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.addComment = (req, res) => {
    if (!req.body.content) return res.status(400).send({message: 'The content cannot be empty'})
    const id = req.params.id
    Post.findByIdAndUpdate(id, {
        $push: {
            comments: req.body
        }
    })
        .then(data => {
            if (!data) {
                return res.status(404).send({message: 'Post not found'})
            }
            Post.findById(id)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.status(500).send({message: err.message})
                })
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}