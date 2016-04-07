
var myApp = angular.module('myApp',
    ['ngRoute', 'firebase'])
    .constant('FIREBASE_URL', 'https://cypher-app.firebaseio.com/')

myApp.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('$routeChangeError',
      function(event, next, previous, error) {
        if (error == 'AUTH_REQUIRED') {
          console.log("saying sorry!")
          $rootScope.message = 'Sorry, you must log in to access that page'
          $location.path('/login')
        }
      })
}])

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'partials/success.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth()
        }
      }
    }).
      when('/cypher-room', {
        templateUrl: 'partials/cypher-room.html',
        controller: 'CypherRoomController'
      }).
      when('/cypher-list', {
        templateUrl: 'partials/cypher-list.html',
        controller: 'CypherListController'
      })

      .
    otherwise({
      redirectTo: '/login'
    });
}]);
