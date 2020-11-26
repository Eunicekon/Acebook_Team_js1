var LoginController = {
  Index: function(req, res) {
    res.render('home/login', { title: 'Acebook' });
  }
//   login: function(req, res) {
//     res.render('home/login', { title: 'Acebook'})
//   }
};

module.exports = LoginController;