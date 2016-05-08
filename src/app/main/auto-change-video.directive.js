(function() {
  'use strict';

  angular
    .module('rapCypher')
    .directive('autoChangeVideo', function($parse, $log, DataService){
      return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
          elm.bind('change', function () {
              $log.log("video changed!");
          });

          elm.bind('ended', function () {
            $log.log("video ended!");
          })

        }
      }
    });

})();
