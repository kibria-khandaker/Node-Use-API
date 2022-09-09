const express = require('express');
const app = express();

const PORT = 5000;
const userRouter = require("./routes/users.route.js");



app.use("/user", userRouter);


app.get('/', (req, res) => {
    res.send('Welcome to my <b> Node App </b>')
})

app.listen(PORT, () => {
    console.log(`My Node App run on PORT ${PORT}`)
})