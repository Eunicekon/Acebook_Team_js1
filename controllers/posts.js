var Post = require('../models/post');
const { post } = require('../routes/home');

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

  exports.deletePost = async (req, res) => {
    let postID = req.params.id;

    await Posts.deleteOne({_id: postID}, (err, data) =>{
      if (err) {
        res.status(500).json({
          message:
          "something went wrong!"
        });
      } else {
        res.status(200).json({
          message: "post deleted!"
        });
      }
    });
  }
}

module.exports = PostsController;
