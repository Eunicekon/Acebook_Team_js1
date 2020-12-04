const User = require("../models/user");
const bcrypt = require('bcrypt');
var HomeController = {
  Index: function(req, res) {
    res.render('home/index');
<<<<<<< HEAD
  },
 Login: function(req,res) {
  const user = User.findOne({ username: req.body.username})
  user.exec().then(data => {
      console.log(data);
      if(!data || !bcrypt.compareSync(req.body.password, data.password)) {
          res.redirect('/');
      }
        req.session.user_id = data._id;
        // console.log(req.session.user_id)
        res.redirect('/posts');
    }
    )}
  };
  module.exports = HomeController;
=======
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
>>>>>>> master
