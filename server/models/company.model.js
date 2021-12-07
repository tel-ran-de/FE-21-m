module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define('companies', {
        name: {
            type: Sequelize.STRING,
            required: true
        },
        address: {
            type: Sequelize.TEXT,
        },
        isActive: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    })

    return Company
}