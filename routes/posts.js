var express = require('express');
var router = express.Router();

var PostsController = require('../controllers/posts')

router.get('/',PostsController.baseRoute);
router.get('/', PostsController.Index);
router.post('/', PostsController.Create);
router.get('/new', PostsController.New);
router.get('/getPost', PostsController.getPost);
router.get('/getPost/:id', PostsController.getSinglePost);

module.exports = router;
