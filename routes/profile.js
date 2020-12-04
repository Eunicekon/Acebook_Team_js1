var express = require('express');
var router = express.Router();
const User = require('../models/user');

var ProfileController = require('../controllers/profile');

router.get('/', ProfileController.Index);
router.get('/edit', ProfileController.Edit);
router.post('/', ProfileController.Edit)
// router.get('/', function(req, res) {
//     User.find({users: req.username._id}, (err, users) => {
//        // however you handle errors goes first
//        res.render('profile/index', {title: "Acebook", header: "Profile", users: users });
//     });
// });

module.exports = router;
