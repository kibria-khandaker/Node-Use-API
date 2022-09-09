const express = require('express');
const randomFun = require('./middleware/randomFun.js');
const app = express();
const PORT = 5000;

// my middleware
// app.use(randomFun);


//--------------
const userRouter = require("./routes/v1/users.route.js");



app.use("/api/v1/user", userRouter);


app.get('/', (req, res) => {
    res.send('Welcome to my <b> Node App </b>')
})




app.all('*', (req, res) => {
    res.send('<b> Maybe Your Route Not exist </b>')
})

app.listen(PORT, () => {
    console.log(`My Node App run on PORT ${PORT}`)
})