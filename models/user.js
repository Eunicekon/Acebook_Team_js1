const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },

    email: {
        type: String,
        required: [true, 'Email cannot be blank']
    },

    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    }
})

var User = mongoose.model('User', UserSchema);
module.exports = User;
