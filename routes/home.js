var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
<<<<<<< HEAD
=======

>>>>>>> master
var HomeController = require('../controllers/home');
router.get('/', HomeController.Index);
<<<<<<< HEAD
router.post('/', HomeController.Login);
module.exports = router;
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
=======

router.post('/', (req,res) => {
    User.findOne({ username: req.body.
      username}).exec().then(data => {
      if(!data) {
          return res.status(400).send({ message: "Your username or password is incorrect" });
      }
      if(!bcrypt.compareSync(req.body.password, data.password)) {
          return res.status(400).send({ message: "Your username or password is incorrect" });
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

>>>>>>> master
