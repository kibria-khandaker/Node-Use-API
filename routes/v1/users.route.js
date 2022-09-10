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

//-5 (a,b,c)
router
.route('/:id')
.get(userApiControlers.getUserID)
.patch(userApiControlers.updatePatchUserById)
.delete(userApiControlers.deleteUserById)

//-6
router
.route('/bulkUpdate/:id')
.patch(userApiControlers.bulkUpdateById)

//-----------------------------

module.exports = router;

