(function () {
  'use strict';

  angular
    .module('rapCypher')
    .directive('fileInput', function ($parse, $log, DataService) {
      return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
          elm.bind('change', function () {
            $parse(attrs.fileInput)
              .assign(scope, elm[0].files);

            $log.log(elm[0]);
            $log.log(elm[0].files);
            $log.log(elm[0].files[0]);

            renderVideo(elm[0].files[0]);
            scope.$apply()

            //this function is called when the input loads a video
            function renderVideo(file) {
              var reader = new FileReader();
              reader.onload = function (event) {
                var the_url = event.target.result;
                DataService.uploadedVideos.push(the_url);
                scope.$apply();
                DataService.video.currentIndex = DataService.uploadedVideos.length - 1;

                $log.log("There have been " + DataService.uploadedVideos.length + " videos uploaded.");

                $('#data-vid').html("<video  width='400' id='actual-video' controls autoplay><source id='vid-source' src='" + the_url + "' type='video/mp4'></video>");
                $('#name-vid').html(file.name);
                $('#size-vid').html(humanFileSize(file.size, "MB"));
                $('#type-vid').html(file.type);


                $log.log('video html: ' + $('#actual-video'));


                document.getElementById('actual-video').addEventListener('ended', myHandler, false);
                function myHandler(e) {
                  $log.log("yo yo");


                  if (DataService.video.currentIndex > 0) {
                    DataService.video.currentIndex--;


                    if (DataService.uploadedVideos[DataService.video.currentIndex] != null) {

                      $log.log("changing src ");
                      // $('#vid-source').src = DataService.uploadedVideos[0];
                      $('#data-vid').html("<video width='400' controls autoplay><source id='vid-source' src='" + DataService.uploadedVideos[DataService.video.currentIndex] + "' type='video/mp4' autoplay></video>");

                      uploadtoS3(DataService.uploadedVideos[DataService.video.currentIndex]);

                    }
                  }

                  // What you want to do after the event
                }

                function uploadtoS3() {

                }

                function end() {
                  $log.log("end it.")
                }

              };

              //when the file is read it triggers the onload event above.
              reader.readAsDataURL(file);
            }

            function humanFileSize(bytes, si) {
              var thresh = si ? 1000 : 1024;
              if (bytes < thresh) return bytes + ' B';
              var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
              var u = -1;
              do {
                bytes /= thresh;
                ++u;
              } while (bytes >= thresh);
              return bytes.toFixed(1) + ' ' + units[u];
            }


          })
        }
      };
    });

})();
