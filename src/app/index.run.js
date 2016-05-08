(function() {
  'use strict';

  angular
    .module('rapCypher')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
