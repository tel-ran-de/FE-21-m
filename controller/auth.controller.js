const db = require('../models')
const config = require('../config/auth.config')
const User = db.user

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.signup = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(data => {
        res.send(data)
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
                return res.status(404).send({message: 'User not found', accessToken: null})
            }
            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            )
            if (!passwordIsValid) {
                return res.status(401).send({message: 'Password is wrong', accessToken: null})
            }
            const token = jwt.sign({id: user.id}, config.secret, {
                expiresIn: 86400
            })
            res.send({
                id: user.id,
                username: user.username,
                email: user.email,
                accessToken: token
            })
        })
        .catch(err=> {
            res.status(500).send({message:err.message})
        })
}