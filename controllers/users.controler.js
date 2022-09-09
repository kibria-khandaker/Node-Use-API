const usersData=[
    {
      "_id": 1,
      "gender":"xx",
      "name": "Construction Tools Manufacturer",
      "contact": "01913595268",
      "address": "Dghaka Bangladesh",
      "photoUrl": "https://construction-tools-36dcf.web.app/",
      "details": "Looking for the best car wash & car cleaning services at home? We are trusted & skilled auto mechanics & service providers in Bangladesh. Book now!",
      "moreImg": [
        "https://i.ibb.co/7VGbp3h/light-mode-1c.png",
        "https://i.ibb.co/PrxDyhC/light-mode-1d.png",
        "https://i.ibb.co/drfs5pN/light-mode-1a.png",
        "https://i.ibb.co/4Jtsb4s/light-mode-1b.png"
      ]
    },
    {
      "_id": 2,
      "gender":"yy",
      "name": "a-smart-cleaner",
      "contact": "01913595268",
      "address": "Dghaka Bangladesh",
      "photoUrl": "https://a-smart-cleaner.web.app/",
      "details": "We are a comprehensive garden cleaning and maintenance company. Get your weekends back, and let our gardening team take care of your gardening.",
      "moreImg": [
        "https://i.ibb.co/dQv9RP4/light-mode-2a.png",
        "https://i.ibb.co/sbfh5f1/light-mode-2b.png",
        "https://i.ibb.co/C59d6v1/light-mode-2c.png",
        "https://i.ibb.co/19CRbWQ/light-mode-2d.png"
      ]
    },
    {
      "_id": 3,
      "gender":"xx",
      "name": "Al-modan Hitlar",
      "contact": "01913595268",
      "address": "Dghaka Bangladesh",
      "photoUrl": "https://fruits-stock-house.web.app/",
      "details": "This service will help you to clean your home and also help to remove deep stains. Our Service provider will use effective chemicals that will wash your home smoothly and neatly.",
      "moreImg": [
        "https://i.ibb.co/ckjqCCV/light-mode-3a.png",
        "https://i.ibb.co/NsMg2c9/light-mode-3b.png",
        "https://i.ibb.co/84pvSPq/light-mode-3c.png",
        "https://i.ibb.co/WV8WRF2/light-mode-3d.png",
        "https://i.ibb.co/qs2NdPB/light-mode-3e.png"
      ]
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
    // res.send('Welcome to my  <b> all Users </b>')
    // res.send(usersData);
    res.json(usersData);
};
// module.exports.postUser = (req, res) => {
//     res.send('Welcome to my  <b> User post API </b>')
// };

module.exports.getRandomUser = (req, res) => {
    res.send('Welcome to my user <b>  Random </b>')
};

module.exports.getSaveUser = (req, res) => {
    res.send('Welcome to my user <b>  Save </b> ')
};

module.exports.getUpdateUser = (req, res) => {
    res.send('Welcome to my user <b>  Update </b>')
};

module.exports.getBulkUpdateUser = (req, res) => {
    res.send('Welcome to my user <b> Bulk-update </b>')
};
module.exports.getDeleteUser = (req, res) => {
    res.send('Welcome to my user <b> Delete </b>')
};

