const bcrypt = require('bcrypt');

var HomeController = {
  Index: function(req, res) {
    res.render('home/index', { title: 'Acebook' });
  },
  SignIn: function(req, res) {
    res.render('home/signIn', { title: 'Acebook'});
  },
  SignUp: function(req, res) {
    res.render('home/signUp', { title: 'Acebook'});
  },


  //Checking data database collection - check if username is correct to allow access
  SignInUser: function(req, res) {
    User.findOne({ username: req.body.username}).exec().then(data => {
      if (!data){
        return res.status(400).send({
          message: "Please enter the right details"});
      }
      if (!bcrypt.compareSync(req.body.password, data.password)){
        return res.status(400).send({
          message: "please enter the right password!"
        });
      }
      res.status(201).redirect('/posts');
    }); 
  },
};

module.exports = HomeController;
