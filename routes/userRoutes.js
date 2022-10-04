const express = require('express');
const addUser = require('../controller/userController');

const router = express.Router();


router.route("/adduser").get(addUser)

module.exports = router; 