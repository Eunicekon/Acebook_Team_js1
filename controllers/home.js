var User = require('../models/user');
const bcrypt = require('bcrypt');

var HomeController = {
  Index: function(req, res) {

      res.render('home/index', { title: 'Acebook' });
    },

   Login: function(req,res) {
    User.findOne({ username: req.body.
      username}).exec().then(data => {
      if(!data) {
          return res.status(400).send({ message: "Your username or password is incorrect" });
      }
      if(!bcrypt.compareSync(req.body.password, data.password)) {
          return res.status(400).send({ message: "Your username or password is incorrect" });
      }
      req.session.test = 'tomato';
      req.session.username = req.body.username;
      req.session.name = data.name;
      //req.session.title = data.title;
      //req.session.firstname = data.firstname;
      //req.session.lastname = data.lastname;

      res.status(201).redirect('/posts');
     });
  },
}

 // login button redirects to ('/posts')
 // need to work on the if statement
 // it logs everybody in with wrong and right username




         // if (User.users === req.user) {
         //   res.status(201).redirect('/posts');
         //   console.log(1)
         // } else {
         //
         // }


module.exports = HomeController;
