const express = require("express");
const userApiControlers = require("../../controllers/users.controler");
const randomFun = require("../../middleware/randomFun");

const router = express.Router();

//---------------------

//-1
router
.route('/')
.get(userApiControlers.allUsers)

//-2
router
.route('/random')
.get(randomFun,userApiControlers.getRandomUser);

//-3
router
.route('/all')
.get(userApiControlers.getAllUsers);

//-4
router
.route('/save')
.post(userApiControlers.getPostUser)

//-5
router
.route('/:id')
.get(userApiControlers.getUserID)

//-6
router
.route('/update/:id')
.patch(userApiControlers.updateUserById)

//-7
router
.route('/bulk-update/:id')
.patch(userApiControlers.bulkUpdateById)

//-8
router
.route('/delete/:id')
.delete(userApiControlers.deleteUserById)
//-----------------------------

module.exports = router;

