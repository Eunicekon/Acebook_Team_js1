var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.post('/', HomeController.Login);


module.exports = router;

