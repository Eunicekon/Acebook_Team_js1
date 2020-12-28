var Post = require('../models/post');
var User = require('../models/user');

var PostsController = {
  Index: function(req, res) {
    console.log(req.session.user_id); //is currently undefined
    if (req.session.user_id == null) {
      return res.redirect('/');
    } 

    Post.find(function(err, posts) {
      res.render('posts/index', { posts: posts });
    });
  },

  New: function(req, res) {
    res.render('posts/new', {});
  },

  Create: function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) {
      if (err) { throw err; }

      res.redirect('/posts');
    });
  },

  Delete: function(req, res){
    var post = new Post(req.body);
    var id = req.body.id;
    post.deleteOne({_id : id}, function(err){
      if(err) { 
        throw err; 
      }
      res.send("Successfully deleted post!");
    });
};

module.exports = PostsController;
