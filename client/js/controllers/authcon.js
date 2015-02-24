angular
    .module('app')
    .controller('LoginController', ['$scope', 'AuthService', '$state',
        function ($scope, AuthService, $state) {
            var userObj;

            $scope.swapper = [];
            $scope.rememberMe = true;
            $scope.isLoggedIn = false;

            //Login User Function
            $scope.loginUser = function () {
                    AuthService
                        .login($scope.user.email, $scope.user.password, $scope.rememberMe)
                        .then(function (response) {
                            $scope.swapper = response;
                            userObj = $scope.orguser;
                            setLocalStorage(userObj);
                        });
                }
                //Logout User Function
            $scope.logoutUser = function () {
                    localStorage.clear();
                    /*
                    AuthService
                    .logout()
                    .then(function () {
                        //$state.go('home');
                    })
                    */
                    logRoute();
                }
                //Set Local Storage For User Info
            function setLocalStorage(userInfo) {
                    // Check browser support
                    if (typeof (Storage) != "undefined") {
                        // Store
                        localStorage.setItem("userInfo", JSON.stringify(userInfo));
                        // Retrieve
                        var getUser = localStorage.getItem("userInfo");
                        $scope.swapper = JSON.parse(getUser);
                        $scope.isLoggedIn = true;
                        //Reload the page to change
                        logRoute($scope.isLoggedIn);
                    } else {
                        alert("Sorry, your browser does not support Web Storage...");
                    }
                }
                //Check our Local Storage For User Data
            function localStorageCall() {
                    var getUser = localStorage.getItem("userInfo");
                    $scope.swapper = JSON.parse(getUser);
                    if (!($scope.swapper == null)) {
                        $scope.isLoggedIn = true;
                    } else {
                        $('#LoginUserBtn').click();
                    }
                }
                //Refresh on Login or Logout
            function logRoute(isLoggedIn) {
                    if (isLoggedIn == true) {
                        $('#LoginUser form[name="loginForm"]').remove();
                        setTimeout(function () {
                            location.reload();
                        }, 1000);
                    } else {
                        setTimeout(function () {
                            location.reload();
                        }, 1000);
                    }
                }
                //Find Out if we have any Login Records
            localStorageCall();
    }])
    .controller('SignUpController', ['$scope', 'AuthService', '$state', function ($scope,
        $state, AuthService) {
        var email = $scope.signup.email;
        var password = $scope.signup.password;
        $scope.userSignUp = {
            email: email,
            password: password
        }
        //Register User
        $scope.register = function () {
            AuthService.register(email, password)
                .then(function () {
                    $state.trasistionTo('home');
                });
        };
    }]);