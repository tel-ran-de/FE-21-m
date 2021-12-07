const db = require('../models')
const config = require('../config/auth.config')
const User = db.user

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.signup = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({message: 'Email and Password cannot be empty'})
    }
    User.create({
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({message: 'User not found'})
            }

            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            )

            if (!passwordIsValid) {
                return res.status(401).send({message: 'Password is invalid'})
            }

            const token = jwt.sign(
                {id: user.id, role: user.role},
                config.secret,
                { expiresIn: 86400}
            )

            res.send({
                user: user.dataValues,
                accessToken: token
            })
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
}