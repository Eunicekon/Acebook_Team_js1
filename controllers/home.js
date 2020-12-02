var HomeController = {
  Index: function(req, res) {
    res.render('home/index', { title: 'Christian' });
  }

//   Login: (function(req, res) {
//     const {username, password } = req.body;
//     const user = User.findOne({ username });
//     const validPassword = bcrypt.compare(password, user.password);
    
//     if(validPassword) {
//         res.send('WELCOME');
//     } else {
//         res.send('Try again!');
//     }
// })

};

module.exports = HomeController;
