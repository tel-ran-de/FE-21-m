const express = require('express')
const fs = require('fs')

const app = express()
const PORT = 8080

const articles = require('./data/articles')

/*
Типы запросов

GET - Получение информации
POST - Отправка (добаление) информации
PUT (PATCH) - отправка информации для изменения ресурса
DELETE - Удаление информации

 */

app.use( express.static(__dirname + "/public") )

app.use((req, res, next)=>{
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()
    const data = `${hour}:${minute}:${second} - ${req.method} - ${req.url}`
    fs.appendFile(__dirname + "/logs/server.log", data + "\n", ()=>{})
    next()
})

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (request, response) => {
    response.status(200).send("<h1>Hello, World!!!</h1>")
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/html/about.html")
})

app.get('/hello/:name/:id', (req, res) => {
    res.end(`Hello, ${req.params.name} - ${req.params.id}`)
})

app.get('/contact', (req, res) => {
    const contact = {
        tel: '555-000-44-235',
        email: 'contact@example.com',
        address: '123 Main Street',
    }
    res.render('contact', contact)
})

app.get('/articles', (req, res) => {
    res.render('articles',{articles})
})

app.get('/article/:id', (req, res) => {
    const article = articles.find(article => article.id === +req.params.id)
    if(article) {
        res.render('article', {article})
    } else {
        res.status(404).send('<h1>Article not found</h1>')
    }
})

app.listen(PORT, () => {
    console.log( `Server listening on port ${PORT}` )
})

