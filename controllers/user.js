const User = require("../models/user");
const bcrypt = require('bcrypt');

var UserController = {

    Index: function(req, res) {
        res.render('user/signup');
    },

    Create: function(req, res) {
        const hash = bcrypt.hash(req.body.password, 10, function(err, hash) {

            const user = new User({
                username: req.body.username,
                password: hash
            })

            user.save(function(err) {
                if (err) { console.log(err) }
                console.log ("Sign up successful.");
              });

            if (err) {
                console.log(err)
            }
            // res.send(hash)
            res.redirect('/');
        })
        
    }
};
module.exports = UserController;