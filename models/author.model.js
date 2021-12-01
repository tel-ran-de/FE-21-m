module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("authors", {
        name: {
            type: Sequelize.STRING
        },
        bio: {
            type: Sequelize.TEXT
        },
        isActive: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    }, {
        tableName: "authors",
        timestamps: true
    })

    return Author

}