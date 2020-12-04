var express = require('express');
var router = express.Router();


var UserController = require('../controllers/user');


router.get('/', UserController.Index);
router.post('/', UserController.Create);




module.exports = router;
<<<<<<< HEAD
// router.get('/', PostsController.Index);
=======
// router.get('/', PostsController.Index);
>>>>>>> master
