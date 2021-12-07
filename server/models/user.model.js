module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        email: {
            type: Sequelize.STRING,
            required: true,
        },
        password: {
            type: Sequelize.STRING,
            required: true,
        },
        username: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.STRING,
            defaultValue: 'guest'
        },
        isActive: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    })

    return User
}