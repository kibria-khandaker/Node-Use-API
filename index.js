const express = require('express')
const app = express()
const PORT = 5000


app.get('/', (req, res) => {
    res.send('Welcome to My<b> Node App </b>')
})

app.get('/user', (req, res) => {
    res.send('Welcome to my users <b>List </b>')
})

app.listen(PORT, () => {
    console.log(`My Node App run on PORT ${PORT}`)
})