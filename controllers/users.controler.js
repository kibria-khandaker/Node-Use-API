const { readFileSync } = require("fs");

const usersData = [
    {
        "id": "1",
        "gender": "xx",
        "name": "Manufacturer 01",
        "contact": "01913595268",
        "address": "Dghaka Bangladesh",
    },
    {
        "id": "2",
        "gender": "yy",
        "name": "a-smart-cleaner",
        "contact": "01913595268",
        "address": "Dghaka Bangladesh",
    },
    {
        "id": "3",
        "gender": "xx",
        "name": "Al-modan Hitlar",
        "contact": "01913595268",
        "address": "Dghaka Bangladesh",
    }
]


module.exports.allUsers = (req, res) => {
    const localUrl = "http://localhost:5000"
    // target="_blank" 
    res.send(`
    Welcome to my user <b> Users </b>

    <p>Ucan fiend Data using By this API </p>

    <p>
        <li> <a  href=${localUrl}>  http://localhost:5000/ </a> </li>
        <li> <a  href="${localUrl}/api/v1/user">  http://localhost:5000/api/v1/user </a> </li>
        <li> <a  href="${localUrl}/api/v1/user/all">  http://localhost:5000/api/v1/user/all </a> </li>
        <li> <a  href="${localUrl}/api/v1/user/random">  http://localhost:5000/api/v1/user/random </a> </li>
        <li> <a  href="${localUrl}/api/v1/user/save">  http://localhost:5000/api/v1/user/save </a> </li>
        <li> <a  href="${localUrl}/api/v1/user/update">  http://localhost:5000/api/v1/user/update </a> </li>
        <li> <a  href="${localUrl}/api/v1/user/bulk-update">  http://localhost:5000/api/v1/user/bulk-update </a> </li>
        <li> <a  href="${localUrl}/api/v1/user/delete">  http://localhost:5000/api/v1/user/delete </a> </li>
    </p>    
    ` )
};

module.exports.getAllUsers = (req, res) => {
    // http://localhost:5000/api/v1/user/all?limit=2&page=1

    const allUsers = JSON.parse(readFileSync(`./public/userData.json`));
    res.send(allUsers)

    // res.json(usersData);
};

module.exports.getRandomUser = (req, res) => {
    res.send('Welcome to my user <b>  Random </b>')
};

module.exports.getSaveUser = (req, res) => {
    res.send('Welcome to my user <b>  Save </b> ')
};
module.exports.getPostUser = (req, res) => {
    console.log(req.body);
    usersData.push(req.body)
    // res.send('Welcome to my user <b>  get Post User </b> ')
    res.send(usersData)
};

module.exports.getUpdateUser = (req, res) => {
    res.send('Welcome to my user <b>  Update this ID-s user </b>')
};

module.exports.getBulkUpdateUser = (req, res) => {
    res.send('Welcome to my user <b> Bulk-update </b>')
};
module.exports.getDeleteUser = (req, res) => {
    res.send('Welcome to my user <b> Delete </b>')
};
module.exports.getUserFile = (req, res) => {
    // res.sendFile(__dirname + "/public/vector2.png");
    res.render("home.ejs", {
        id: 2,
    });
};

// find user by id
module.exports.getUserID = (req, res) => {
    const { id } = req.params;
    const userId = usersData.find(user => user.id == id)
    // res.send(userId.name)
    res.send(userId)
};

// find user by id and match user to patch
module.exports.updatePutUserById = (req, res) => {
    const { id } = req.params;
    const userId = usersData.find(user => user.id == id)
    res.send(userId)
};

module.exports.updatePatchUserById = (req, res) => {
    const { id } = req.params;
    const filter = { id: id };
    const newData = usersData.find(data => data.id == id);
    newData.id = id;
    newData.name = req.body.name;
    res.send(newData);
};

module.exports.deleteUserById = (req, res) => {
    const { id } = req.params;
    const filter = { id: id };
    const newData2 = usersData.filter(data => data.id !== id);
    res.send(newData2);
};

