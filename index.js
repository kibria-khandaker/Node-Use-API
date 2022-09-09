const express = require('express')
const app = express()
const PORT = 5000


app.get('/', (req, res) => {
    res.send('Welcome to My<b> Node App </b>')
})

app.get('/user', (req, res) => {
    res.send('Welcome to my users <b>List </b>')
})

app.get('/user/random', (req, res) => {
    res.send('Welcome to my user <b> List/random </b>')
})

app.get('/user/all', (req, res) => {
    res.send('Welcome to my user <b> List/all </b> ')
})
app.get('/user/save', (req, res) => {
    res.send('Welcome to my user <b> List/save </b> ')
})
app.get('/user/update', (req, res) => {
    res.send('Welcome to my user <b> List/update </b>')
})
app.get('/user/bulk-updat', (req, res) => {
    res.send('Welcome to my user <b> List/bulk-updat </b>')
})
app.get('/user/delete', (req, res) => {
    res.send('Welcome to my user <b> List/delete </b>')
})


app.listen(PORT, () => {
    console.log(`My Node App run on PORT ${PORT}`)
})