const db = require('../models')
const Company = db.company

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