var express = require('express');
var router = express.Router();

var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.get('/signIn', HomeController.SignIn);
router.get('/signUp', HomeController.SignUp);

module.exports = router;
