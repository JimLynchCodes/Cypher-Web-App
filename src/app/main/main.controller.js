(function () {
  'use strict';

  angular
    .module('rapCypher')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $scope, DataService) {
    var vm = this;

    vm.videos = '';
    vm.commentText = '';

    vm.uploadedVideos = DataService.uploadedVideos;
    vm.comments = DataService.comments;

    vm.mess = 'Rap Cyper';
    $log.log("ok");


    vm.iconClicked = function (index) {
      $log.log("clicked movie icon: " + index);
      $('#data-vid').html("<video width='400' controls autoplay><source id='vid-source' src='" + DataService.uploadedVideos[index] + "' type='video/mp4'></video>");

    };

    $scope.filesChanged = function (elm) {
      vm.videos = elm.files;
      $log.log("changing the files! " + elm.files);
      $scope.$apply();

    };

    vm.videoUploaded = function () {
      $log.log("uploaded!");
    };

    vm.commentSubmit = function () {
      $log.log("submitted: " + vm.commentText);

      var comment = {
        text: vm.commentText,
        user: 'annonymous'

      };

      vm.comments.unshift(comment);
      vm.commentText = '';
    };

    vm.videoEnd = function () {
      $log.log("video ended!");
    };

    vm.previousBtnClicked = function () {
      $log.log("previous button clicked!");

      if (DataService.video.currentIndex > 0) {
        DataService.video.currentIndex--;
      }

      if (DataService.uploadedVideos[DataService.video.currentIndex] != null) {

        $log.log("changing src ");
        // $('#vid-source').src = DataService.uploadedVideos[0];
        $('#data-vid').html("<video width='400' controls autoplay><source id='vid-source' src='" + DataService.uploadedVideos[DataService.video.currentIndex] + "' type='video/mp4'></video>");


      }
    };

    var takePicture = $("#take-picture");
    takePicture.onchange = function (event) {

      $log.log("changing!");
      // Get a reference to the taken picture or chosen file
      var files = event.target.files,
        file;
      if (files && files.length > 0) {
        file = files[0];
        vm.video = file;
      }
    };


  }
})();
