const express = require('express')
const cors = require('cors')
const db = require('./models')
const PORT = 8080

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

db.sequelize.sync({force: false})
.then(() => {
    console.log('Database synced successfully')
})
.catch(err => {
    console.log('Upss! ' + err.message)
})

app.get('/', (req, res) => {
    res.send("<h1>Worked!</h1>")
})

app.use( (req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-oauth-token, Origin, Content-Type, Access"
    )
    next()
} )

require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)
require('./routes/company.routes')(app)
require('./routes/product.routes')(app)
require('./routes/order.routes')(app)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})