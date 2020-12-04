const User = require("../models/user");

var ProfileController = {
  Index: function(req, res) {
    User.findOne({username: 'tim'}, (err, item) => {
  res.render('profile/index', {title: "Acebook", header: "Profile", item: item });
    })
  },

  Edit: function(req, res) {
    console.log(req.body.firstName)
    var id = req.body.id
    var username = req.body.username
    var firstName = req.body.firstName

    User.findOneAndupdate({ "_id" : id }, {$set: {"username" : username, "firstName" : firstName}}, function(err){
      if (err) {
        throw err;
      }
      res.render('profile/edit', {title: "Acebook", header: "Profile"});
    })

    // User.findOne({ username: req.body.username}).exec().then(item => {
    //   console.log(req.body.firstName)
    //   if(!item) {
    //     res.status(404);
    //   }
    //   if(req.body.username === item.username) {
    //     User.updateOne({username: 'tim'}, {'$set': { 'firstName': req.body.firstName }}, (err, item) => {
    //       res.render('profile/edit', {title: "Acebook", header: "Profile", item: item });
    //     })
    //   }
    // })
  }


}

module.exports = ProfileController;
