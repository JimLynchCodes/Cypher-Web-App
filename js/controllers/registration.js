myApp.controller('RegistrationController', ['$scope',
    'Authentication', function($scope, Authentication) {

   // $scope.message = $scope.message

    $scope.login = function() {
        Authentication.login($scope.user)
    }
        $scope.logout = function() {
            Authentication.logout()
        }
    $scope.register = function() {
        Authentication.register($scope.user)
    }

}])