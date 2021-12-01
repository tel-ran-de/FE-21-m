module.exports = {
    HOST: "127.0.0.1",
    PORT: 33306,
    USER: 'root',
    PASSWORD: 'secret',
    DB: 'book_shop',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}