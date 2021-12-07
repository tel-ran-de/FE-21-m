module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('products', {
        name: {
            type: Sequelize.STRING,
            required: true
        },
        description: {
            type: Sequelize.TEXT,
        },
        image: {
            type: Sequelize.STRING,
            defaultValue: 'https://nasijagaltangsel.websites.co.in/dummytemplate/img/product-placeholder.png'
        },
        price: {
            type: Sequelize.INTEGER,
        },
        isActive: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    })

    return Product
}