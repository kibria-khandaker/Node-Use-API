module.exports.allUsers = (req, res) => {
    const localUrl = "http://localhost:5000"
    res.send(`
    Welcome to my user <b> Users </b>

    <p>Ucan fiend Data using By this API </p>
    <p>
        <li> <a  target="_blank" href=${localUrl}>  http://localhost:5000/ </a> </li>
        <li> <a  target="_blank" href="${localUrl}/api/v1/user">  http://localhost:5000/api/v1/user </a> </li>
        <li> <a  target="_blank" href="${localUrl}/api/v1/user/all">  http://localhost:5000/api/v1/user/all </a> </li>
        <li> <a  target="_blank" href="${localUrl}/api/v1/user/random">  http://localhost:5000/api/v1/user/random </a> </li>
        <li> <a  target="_blank" href="${localUrl}/api/v1/user/save">  http://localhost:5000/api/v1/user/save </a> </li>
        <li> <a  target="_blank" href="${localUrl}/api/v1/user/update">  http://localhost:5000/api/v1/user/update </a> </li>
        <li> <a  target="_blank" href="${localUrl}/api/v1/user/bulk-update">  http://localhost:5000/api/v1/user/bulk-update </a> </li>
        <li> <a  target="_blank" href="${localUrl}/api/v1/user/delete">  http://localhost:5000/api/v1/user/delete </a> </li>
    </p>    
    ` )
};

module.exports.getAllUsers = (req, res) => {
    res.send('Welcome to my  <b> all Users </b>')
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

