var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

var UserController = require('../controllers/user');
const User = require('../models/user');

router.get('/signup', UserController.Index);
router.post('/signup', UserController.Create);

router.get('/login', UserController.Login);

router.post('/login', async (req, res) => {
    const {username, password } = req.body;
    const user = await User.findOne({ username });
    const validPassword = bcrypt.compare(password, user.password);
    
    if(validPassword) {
        res.send('WELCOME');
    } else {
        res.send('Try again!');
    }
})


module.exports = router;
// router.get('/', PostsController.Index);