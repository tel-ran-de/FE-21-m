const config = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        port: config.PORT,
        dialect: config.dialect,
        operationsAliases: false,
        pool: config.pool
    }
)

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.user = require('./user.model')(sequelize, Sequelize)
db.company = require('./company.model')(sequelize, Sequelize)
db.product = require('./product.model')(sequelize, Sequelize)
db.order = require('./order.model')(sequelize, Sequelize)
db.orderDetail = require('./orderDetail.model')(sequelize, Sequelize)

module.exports = db