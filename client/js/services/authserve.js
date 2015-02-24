angular
  .module('app')
  .factory('AuthService', ['Swapper', '$q', '$rootScope', function(User, $q,
      $rootScope) {
    //Store User Login Info
      var user;
    function login(email, password, rememberMe) {
      return User
        .login({email: email, password: password, rememberMe: rememberMe })
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email,
            rememberMe: rememberMe,
            user: response.user
          };
          var userObj = $rootScope.currentUser;
          return userObj;
        });
    }
    //RootScope for the User Logout
    function logout() {
      return User
       .logout()
       .$promise
       .then(function() {
            $rootScope.currentUser = null;
       });
    }
    //RootScope for the User Register
    function register(email, password) {
      return User
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);