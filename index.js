const express = require('express');
const errorHandler = require('./middleware/errorHandeler.js');
const randomFun = require('./middleware/randomFun.js');
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();


// middleware -------
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
// app.use(express.text());
// app.use(randomFun);


//--------------
const userRouter = require("./routes/v1/users.route.js");
app.use("/api/v1/user", userRouter);



//-----------------------------
app.get('/', (req, res) => {
    res.send('Welcome to my Node App')
});
app.all('*', (req, res) => {
    res.send(' Maybe Your Route Not exist')
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`My Node App run on PORT ${port}`)
});

process.on("unhandleRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1)
    });
});