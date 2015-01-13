(function() {
    'use strict';
    describe('checking setup constants', function () {
        var constants;

        beforeEach(function(){
            module('tombola.noughtsAndCrosses.gameModel');
            inject(function($injector){
                constants = $injector.get('gameConstants');
            });
        });

        it('check outcome defaults to continue', function () {
            expect(constants.outcome).to.equal('continue');
        });

        it('check gameboard defaults as empty', function () {
            expect(constants.gameboard).to.equal('000000000');
        });

        it('check it defaults as no winner', function () {
            expect(constants.winner).to.equal(0);
        });

        it('check player1 defaults to default choice', function () {
            expect(constants.player1).to.equal('human');
        });

        it('check player2 defaults to default choice', function () {
            expect(constants.player2).to.equal('random');
        });

        it('check currentPlayer defaults to 1', function () {
            expect(constants.currentPlayer).to.equal(1);
        });

        it('check player1 score', function () {
            expect(constants.score.player1).to.equal(0);
        });

        it('check player2 score', function () {
            expect(constants.score.player2).to.equal(0);
        });

});

})();