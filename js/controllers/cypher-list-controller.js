/**
 * Created by bobolicious3000 on 2/7/16.
 */
myApp.controller('CypherListController', ['$rootScope', '$firebaseAuth', '$firebaseObject',
    '$location', 'FIREBASE_URL',
    function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL) {

        var ref = new Firebase(FIREBASE_URL + '/cypher-rooms');

       //var listRequest = $firebaseObject(ref);

        ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            $rootScope.roomsObject = snapshot.val();

        }, function (errorObject) {
            console.log("The readfailed: " + errorObject.code);
        });



       //listRequest.$on(function(obj) {
       //  console.log("what's the obj? " + obj);
       //});

        $rootScope.onRoomListItemClicked = function(room) {
            console.log("Item has been clicked!");
            console.log("id was: " + room.id);

            $rootScope.currentRoomSelected = room;
            $location.path('/cypher-room')
        };

        console.log("lalala");
        //console.log("lalala");

    //
    //    // $scope.message = $scope.message
    //
    //    $scope.login = function() {
    //        Authentication.login($scope.user)
    //    }
    //    $scope.logout = function() {
    //        Authentication.logout()
    //    }
    //    $scope.register = function() {
    //        Authentication.register($scope.user)
    //    }

    }]);