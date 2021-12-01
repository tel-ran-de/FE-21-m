module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('books', {
        title: {
            type: Sequelize.STRING,
            required: true
        },
        author_id: {
            type: Sequelize.INTEGER,
            defaultValue: 3
        },
        description: {
            type: Sequelize.TEXT,
        },
        price: {
            type: Sequelize.INTEGER,
            defaultValue: 500
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    })

    return Book
}