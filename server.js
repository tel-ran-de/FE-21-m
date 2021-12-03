const express = require('express')
const cors = require('cors')

const db = require('./models')

const PORT = 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

db.mongoose
    .connect(db.url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => {
        console.log("Connected to Database!")
    } )
    .catch(err => {
        console.log(`Upps, error: ${err.message}`)
    })

app.get('/', (req, res) => {
    res.send({message: 'Hello, Mongoose'})
})

require('./routes/post.routes')(app)

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})
