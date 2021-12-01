const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: dbConfig.pool
    }
)

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.author = require("./author.model")(sequelize, Sequelize)
db.book = require("./book.model")(sequelize, Sequelize)

module.exports = db