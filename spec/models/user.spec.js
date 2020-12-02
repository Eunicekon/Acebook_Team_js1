var mongoose = require('mongoose');

require('../mongodb_helper')
var User = require('../../models/user');

describe('User model', function() {
  beforeEach(function(done) {
      mongoose.connection.collections.users.drop(function() {
          done();
      });
  });

  it('has a user', function() {
    var user = new User({ username: 'Sham' });
    expect(user.username).toEqual('Sham');
  });

  it('logs in a user with correct credentials', function() {
    var user = new User({ username: 'Sham', password: '12345'});
    expect(user.username).toEqual('Sham');
    expect(user.password).toEqual('12345');
  });
});
