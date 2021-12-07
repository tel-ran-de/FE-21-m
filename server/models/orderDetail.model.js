module.exports = (sequelize, Sequelize) => {
    const OrderDetail = sequelize.define('orderDetails', {
        order_id : {
            type: Sequelize.INTEGER,
        },
        product_id: {
            type: Sequelize.INTEGER,
        },
        quantity: {
            type: Sequelize.INTEGER,
        }
    })

    return OrderDetail
}