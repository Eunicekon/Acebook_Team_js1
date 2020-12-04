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
                email: req.body.email,
                password: hash
            })

            user.save(function(err, doc) {
                if (err) return console.error(err);
                // console.log(user);
              });
              
            req.session.user_id = user._id;
            // console.log(req.session.user_id)

            if (err) {
                console.log(err)
            }
            // res.send(hash)
            res.redirect('/');
        })
        
    },

    Logout: function(req, res){
        console.log(req.session.user_id)
        req.session.user_id = null;
        res.redirect('/');
      }
};
module.exports = UserController;
