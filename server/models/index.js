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

db.order.belongsTo(db.user, {as: 'user', foreignKey: 'user_id'})
db.order.belongsTo(db.company, {as: 'company', foreignKey: 'company_id'})
db.order.list = db.order.hasMany(db.orderDetail, {as: 'productsList', foreignKey: 'order_id'})

db.company.hasMany(db.order, {as: 'orders', foreignKey: 'company_id'})

db.orderDetail.belongsTo(db.product, {as: 'product', foreignKey: 'product_id'})

module.exports = db