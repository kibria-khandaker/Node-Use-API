const express = require('express')
const app = express()
const PORT = 5000


app.get('/', (req, res) => {
    res.send('Welcome to my <b> Node App </b>')
})


app.listen(PORT, () => {
    console.log(`My Node App run on PORT ${PORT}`)
})