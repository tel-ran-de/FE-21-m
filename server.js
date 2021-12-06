const express = require('express')
const cors = require('cors')

const PORT = 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./models')
db.sequelize.sync({force: false})

app.get('/', (req, res) => {
    res.send({message: "Hello, world"})
})

app.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-oauth-token, Origin, Content-Type, Accept"
    )
    next()
})

require('./routes/author.routes')(app)
require('./routes/book.routes')(app)
require('./routes/auth.routes')(app)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

/*

MVC
M - model
V - view
C - controller

 */