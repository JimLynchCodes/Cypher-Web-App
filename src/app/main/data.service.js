(function () {
  'use strict';

  angular
    .module('rapCypher')
    .service('DataService', DataService);

  function DataService() {
    var self = this;

    self.video = {
      src: '',
      currentIndex: 0
    }

    self.uploadedVideos = [];

    self.comments = [];

  }

  self.videoEnd = function () {
    $log.log("dude");
  }

})();
