// the ability to get either a specific user's data, or to get a list of all our users

angular.module('angularfireSlackApp')
  .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl) {
    var usersRef = new Firebase(FirebaseUrl+'users');
    var users = $firebaseArray(usersRef);

    var Users = {
      getProfile: function(uid) {
        return $firebaseObject(usersRef.child(uid));
      },
      getDisplayName: function(uid) {
        return users.$getRecord(uid).displayName;
      },
      getGravatar: function(uid) {
        return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
      },
      all: users
    };

    return Users;

  });