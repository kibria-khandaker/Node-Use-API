const express = require("express");
const userApiControlers = require("../../controllers/users.controler");
const randomFun = require("../../middleware/randomFun");

const router = express.Router();

router
.route('/')
.get(userApiControlers.allUsers)

router
.route('/all')
.get(userApiControlers.getAllUsers);

router
.route('/random')
.get(randomFun,userApiControlers.getRandomUser);

router
.route('/save')
.get(userApiControlers.getSaveUser)
.post(userApiControlers.getPostUser);

router
.route('/update')
.get(userApiControlers.getUpdateUser)

router
.route('/bulk-update')
.get(userApiControlers.getBulkUpdateUser);

router
.route('/delete')
.get(userApiControlers.getDeleteUser);

router
.route('/file')
.get(userApiControlers.getUserFile);

router
.route('/:id')
.get(userApiControlers.getUserID)
.put(userApiControlers.updatePutUserById)
.patch(userApiControlers.updatePatchUserById)
.delete(userApiControlers.deleteUserById)

module.exports = router;

