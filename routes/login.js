var express = require('express');
var router = express.Router();

var HomeController = require('../controllers/login');

router.get('/', LoginController.Index);

module.exports = router;