const mongoose = require("mongoose");
var Post = require('../models/post');


var PostsController = {
  Index: function(req, res) {
    Post.find(function(err, posts) {
      if (err) { throw err; }

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

      res.status(201).redirect('/posts');
    });
  },
  baseRoute: async (re, res) => {
    res.send('server running');
  },
  getPost: async (req, res) => {
    const posys = await Post.find();
    res.json(posts);
  },
  getSinglePost: async (req, res) => {
    let postID = req.params.id;
    await Posts.findById({_id: postID}, (err, data) =>{
      if (err) {
        res.status(500).json({
          message:
          "something went wrong!",
        });
      }else {
        console.log(data);
        res.status(200).json({
          message:"Post found!",
          data
        });
      }
    });
  }
};

module.exports = PostsController;
