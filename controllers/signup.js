var SignUpController = {
  Index: function(req, res) {
    res.render('signup/index', { title: 'Acebook', prompt: 'Please sign up' });
  }
};

module.exports = SignUpController;
