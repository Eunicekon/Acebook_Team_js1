const User = require("../models/user");

var ProfileController = {
  Index: function(req, res) {
    User.findOne({username: 'tim'}, (err, item) => {
  console.log(item)
  res.render('profile/index', {title: "Acebook", header: "Profile", item: item });
  console.log(item)
    })
  },

  Edit: function(req, res) {
    res.render('profile/edit', {});
  },





}

module.exports = ProfileController;
