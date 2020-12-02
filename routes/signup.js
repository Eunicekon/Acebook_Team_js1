var express = require('express');
var router = express.Router();

var SignUpController = require('../controllers/signup');

router.get('/', SignUpController.Index);

module.exports = router;
