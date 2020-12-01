var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user')

router.get('/signup', UserController.Index);
router.post('/signup', UserController.Create);

module.exports = router;
// router.get('/', PostsController.Index);