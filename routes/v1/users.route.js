const express = require("express");
const userApiControlers = require("../../controllers/users.controler");
const randomFun = require("../../middleware/randomFun");

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Welcome to my  <b> User </b>')
// })
// router.post('/', (req, res) => {
//     res.send('Welcome to my  <b> User post API </b>')
// })

router
.route('/')
.get(userApiControlers.allUsers)
// .post(userApiControlers.postUser)

router
.route('/all')
.get(userApiControlers.getAllUsers);

router
.route('/random')
.get(randomFun,userApiControlers.getRandomUser);

router
.route('/save')
.get(userApiControlers.getSaveUser);

router
.route('/update')
.get(userApiControlers.getUpdateUser);

router
.route('/bulk-update')
.get(userApiControlers.getBulkUpdateUser);

router
.route('/delete')
.get(userApiControlers.getDeleteUser);

module.exports = router;

