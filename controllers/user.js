const User = require("../models/user");

var UserController = {

    Index: function(req, res) {
        res.render('user/signup');
    },

    Create: function(req, res) {
       res.send(req.body)
    }
};
module.exports = UserController;