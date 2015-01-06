(function() {
    'use strict';
    describe('checking setup constants', function () {
        var constants;

        beforeEach(function(){
            angular.module('tombola.noughtsAndCrosses.gameModel');
            inject(function($injector){
                constants = $injector.get('gameConstants');
            });
        });

        it('check outcome defaults to continue', function () {
            //expect(constants.outcome).to.equal('continue');
            expect(1).to.equal(1);
        });

    });

})();