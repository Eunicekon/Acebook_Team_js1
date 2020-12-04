const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstName: {
      type: String,
      required: [true, 'First name cannot be blank']
    },

    lastName: {
      type: String,
      required: [true, 'Last name cannot be blank']
    },

    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },

    email: {
        type: String,
        required: [true, 'Email cannot be blank']
    },

    description: {
      type: String,
      required: [true, 'Description cannot be blank']
    },

    location: {
      type: String,
      required: [true, 'Location cannot be blank']
    },

    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    },


})

var User = mongoose.model('User', UserSchema);
module.exports = User;
