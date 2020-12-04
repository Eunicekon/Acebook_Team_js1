var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);

router.post('/', (req,res) => {
    User.findOne({ username: req.body.
      username}).exec().then(item => {
      if(!item) {
        res.status(400).redirect('/');
      }
      if(!bcrypt.compareSync(req.body.password, item.password)) {
        res.status(400).redirect('/');
      }
      res.status(201).redirect('/posts');
    }
      )});

// router.get('/', HomeController.Login);

// router.post('/', async (req, res) => {
//     // const {username, password } = req.body;
//     const username =  req.body.username;
//     const password = req.body.password;
//     console.log(password);
//     const user = await User.findOne({ username }).exec();
//     console.log(user);

//     let validPassword = bcrypt.compare(password, user.password);
//     console.log(validPassword);

//     if(validPassword == true) {
//         res.status(201).redirect('/posts');
//     } else {
//         res.status(404);
//     }
// })

module.exports = router;
