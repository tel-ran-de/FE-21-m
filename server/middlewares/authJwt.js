const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')

const verifyToken = (req, res, next) => {
    let token = req.headers['x-oauth-token']

    if (!token) {
        return res.status(403).send({message: 'No token. Unauthorized.'})
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({message: "Unauthorized"})
        }
        req.userId = decoded.id
        req.role = decoded.role
        next()
    })
}

const isAdmin = (req, res, next) => {
    if (req.role !== 'admin') {
        return res.status(403).send({message: 'Forbidden!'})
    }
    next()
}

const isCanShowUserInfo = (req, res, next) => {
    if (req.role !== 'admin' && req.params.id !== req.userId) {
        return res.status(403).send({message: 'Forbidden!'})
    }
    next()
}

const isCanModify = (req, res, next) => {
    if (req.role === 'guest') {
        return res.status(403).send({message: 'Forbidden!'})
    }
    next()
}

const authJwt = {
    verifyToken,
    isAdmin,
    isCanShowUserInfo,
    isCanModify
}

module.exports = authJwt