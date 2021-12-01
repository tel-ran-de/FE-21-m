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

require('./routes/author.routes')(app)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

/*

MVC
M - model
V - view
C - controller

 */