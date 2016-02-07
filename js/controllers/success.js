myApp.controller('SuccessController', ['$rootScope','$scope', function($scope, $rootScope) {

//    $scope.message = $scope.message


    console.log('getting the user: ' + $rootScope.currentUser)
    $rootScope.message = "Well hello there, " + $rootScope.currentUser.firstname


}])