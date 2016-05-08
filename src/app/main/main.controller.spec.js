(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('rapCypher'));
    beforeEach(inject(function(_$controller_, $rootScope) {
      // spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
      // spyOn(_toastr_, 'info').and.callThrough();
      var scope = $rootScope.$new()
      vm = _$controller_('MainController', {$scope:scope});

    }));

    it('should do something', function() {
      expect(true);
    })



  });
})();
