const express = require ('express');
var Post = require('../models/post');
const router = require('../routes/posts');
const mongoose = mongoose('mongoose');
var Post = mongoose.model('Post');

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
  }
  Post: function (req, res){
    var post = new Post();
    post.message = req.body.message;
    post.comment = req.body.comment;
    post.save((err, doc) => {
      if (!err) {
        res.redirect('post/list');
      }else {
        console.log('Error during record insertion: ' + err);
      }
      res.status(201).redirect('/posts')
    });
    }
  }
  
  router.get('/list', (req, res) => {
    res.json('from list');
  })
  
  ('/', (req, res) => {
    insertRecord(req, res)
  }),
  function insertRecord(req, res){
    var post = new Post();
    post.message = req.body.message;
    post.comment = req.body.comment;
    post.save((err, doc) => {
      if (!err) {
        res.redirect('post/list');
      }else {
        console.log('Error during record insertion: ' + err);
      }
    });
  };
};

module.exports = PostsController;
