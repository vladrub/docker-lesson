const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
let users = require('./data/users.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/users', (req, res) => {
    fs.readFile('./data/users.json', 'utf-8', (err, data) => {
        let users = JSON.parse(data)
        res.send(users);
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});