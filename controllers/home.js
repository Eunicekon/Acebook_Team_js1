const User = require("../models/user");
const bcrypt = require('bcrypt');
var HomeController = {
  Index: function(req, res) {
    res.render('home/index');
  },
 Login: function(req,res) {
  const user = User.findOne({ username: req.body.username})
  user.exec().then(data => {
      console.log(data);
      if(!data || !bcrypt.compareSync(req.body.password, data.password)) {
          res.redirect('/');
      }
        req.session.user_id = data._id;
        // console.log(req.session.user_id)
        res.redirect('/posts');
    }
    )}
  };
  module.exports = HomeController;
