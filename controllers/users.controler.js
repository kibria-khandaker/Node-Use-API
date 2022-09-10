const { __express } = require("ejs");
const { readFileSync } = require("fs");
const path = require('path');

const usersData = [
    {
        "id": "1",
        "gender": "meal",
        "name": "Golam",
        "contact": "01913595268",
        "address": "Dhaka Bangladesh",
        "photoUrl": "https://ibb.co/Sry524D"
    },
    {
        "id": "2",
        "gender": "female",
        "name": "Kibria",
        "contact": "01913595268",
        "address": "Dhaka Bangladesh",
        "photoUrl": "https://ibb.co/WGqZkWg"
    },
    {
        "id": "3",
        "gender": "meal",
        "name": "Lalon Mod",
        "contact": "01913595268",
        "address": "Dghaka Bangladesh",
        "photoUrl": "https://ibb.co/Xx9NNmf"
    },
    {
        "id": "4",
        "gender": "female",
        "name": "Al-modan Hitlar",
        "contact": "01913595268",
        "address": "Dghaka Bangladesh",
        "photoUrl": "https://ibb.co/DR4k9KR"
    },
    {
        "id": "5",
        "gender": "meal",
        "name": "Jhon hail",
        "contact": "01913595268",
        "address": "Dghaka Bangladesh",
        "photoUrl": "https://ibb.co/CHp7Z3X"
    },
    {
        "id": "6",
        "gender": "female",
        "name": "Abladio",
        "contact": "01913595268",
        "address": "Dghaka Bangladesh",
        "photoUrl": "https://ibb.co/CHp7Z3X"
    }
]


//------------------------

//-1
module.exports.allUsers = (req, res) => {
    res.render("home.ejs");
};

//-2
module.exports.getRandomUser = (req, res) => {
    // res.send('Welcome to my user <b>  Random </b>')
    var randomUsers = usersData[Math.floor(Math.random() * usersData.length)];
    res.send(randomUsers)

};

//-3
module.exports.getAllUsers = (req, res) => {
    res.json( usersData);
};

//-4
module.exports.getPostUser = (req, res) => {
    console.log(req.body);
    usersData.push(req.body)
    // res.send('Welcome to my user <b>  get Post User </b> ')
    res.send(usersData)
};

//-5a
module.exports.getUserID = (req, res) => {
    const { id } = req.params;
    const userId = usersData.find(user => user.id == id)
    // res.send(userId.name)
    res.send(userId)
};

//-5b
module.exports.updatePatchUserById = (req, res) => {
    const { id } = req.params;
    const filter = { id: id };
    const newData = usersData.find(data => data.id == id);
    newData.id = id;
    newData.name = req.body.name;
    res.send(newData);

};

//-5c
module.exports.deleteUserById = (req, res) => {
    const { id } = req.params;
    const filter = { id: id };
    const newData2 = usersData.filter(data => data.id !== id);
    res.send(newData2);
};

//-6
module.exports.bulkUpdateById = (req, res) => {
    const { id } = req.params;
    const newData = usersData.find(data => data.id == id);
    newData.id = id;

    newData.gender = req.body.gender;
    newData.name = req.body.name;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl;

    res.send(newData);
};

//----------------

