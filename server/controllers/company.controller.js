const db = require('../models')
const Company = db.company

exports.create = (req, res) => {
    if (!req.body.name) return res.status(400).send({message: 'Company Name is required'})

    Company.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findAll = (req, res) => {
    Company.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Company.findByPk(id)
        .then(data => {
            if (data) {
                return res.send(data)
            }
            res.status(404).send({message: 'Company not found'})
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Company.update(req.body, {
        where: {
            id
        }
    })
        .then(num => {
            if (+num!==1) {
                return res.status(404).send({message: 'Company not found'})
            }
            Company.findByPk(id)
                .then(data => {
                    res.send(data)
                })
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Company.update({isActive: 0}, {
        where: {
            id
        }
    })
        .then(num => {
            if (+num!==1) {
                return res.status(404).send({message: 'Company not found'})
            }
            Company.findByPk(id)
                .then(data => {
                    res.send(data)
                })
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}