/*
CRUD - operations
Create
Read
Update
Delete

create
findAll
findOne
findActive
update
delete

 */

const db = require('../models')
const Author = db.author

exports.create = (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({message: 'Name field can\'t be empty' })
    }
    const author = {
        name: req.body.name,
        bio: req.body.bio ?? ''
    }

    Author.create(author)
        .then( data => {
            res.send(data)
        } )
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findAll = (req, res) => {
    Author.findAll()
        .then( data => {
            res.send(data)
        })
        .catch(err=> {
            res.status(500).send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Author.findByPk(id)
        .then( data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({message: `Author with id=${id} not found`})
            }
        })
        .catch(err=> {
            res.status(500).send({message: err.message})
        })
}

exports.findActive = (req, res) => {
    Author.findAll({
        where: {
            isActive: 1
        }
    })
        .then( data => {
            res.send(data)
        })
        .catch(err=> {
            res.status(500).send({message: err.message})
        })
}

exports.update = (req, res) => {
    const authorId = req.params.id
    Author.update(req.body, {
        where: {
            id: authorId
        }
    })
        .then( data => {
            if (data == 1) {
                Author.findByPk(authorId)
                    .then(author => {
                        res.send(author)
                    })
                    .catch(err=> {
                        res.status(500).send({message: err.message})
                    })
            } else {
                res.status(400).send({message:"Cannot update Author with id="+authorId})
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.delete = (req, res) => {
    const authorId = req.params.id
    Author.update({isActive: 0}, {where: {id: authorId}})
        .then( data => {
            if (data == 1) {
                Author.findByPk(authorId)
                    .then(author => {
                        res.send(author)
                    })
                    .catch(err=> {
                        res.status(500).send({message: err.message})
                    })
            } else {
                res.status(400).send({message:"Cannot delete Author with id="+authorId})
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}