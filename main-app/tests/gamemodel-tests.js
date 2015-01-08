(function() {
    'use strict';
    describe('testing the gamemodels inital setup.', function () {

        var gamemodel;


        beforeEach(function(){
            var $injector = angular.injector(['tombola.noughtsAndCrosses.gameModel']);
            gamemodel = $injector.get('gameModel');
        });

        it('check the game models outcome is set to the default constant', function () {
            expect(gamemodel.outcome).to.equal('continue');
        });

        it('check the game models gameboard is set to the default constant', function () {
            expect(gamemodel.gameboard).to.equal('000000000');
        });

        it('check the game models winner is set to the default constant', function () {
            expect(gamemodel.winner).to.equal(0);
        });

        it('check the game models player1 is set to the default constant', function () {
            expect(gamemodel.player1).to.equal('human');
        });

        it('check the game models player2 is set to the default constant', function () {
            expect(gamemodel.player2).to.equal('random');
        });

        it('check the game models currentPlayer is set to the default constant', function () {
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check the game models player1 score is set to 0', function () {
            expect(gamemodel.score.player1).to.equal(0);
        });

        it('check the game models player2 score is set to 0', function () {
            expect(gamemodel.score.player2).to.equal(0);
        });

    });

    describe('testing the gamemodels newGame() function', function () {

        var gamemodel;

        beforeEach(function(){
            var $injector = angular.injector(['tombola.noughtsAndCrosses.gameModel']);
            gamemodel = $injector.get('gameModel');
        });

        it('check currentPlayer after newGame() on default game (human vs random)', function () {
            gamemodel.newGame();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after newGame() on human vs pre-trained game', function () {
            gamemodel.player2='pre-trained';
            gamemodel.newGame();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after newGame() on human vs human game', function () {
            gamemodel.player2='human';
            gamemodel.newGame();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after newGame() on random vs human game)', function () {
            gamemodel.player1='random';
            gamemodel.player2='human';
            gamemodel.newGame();
            expect(gamemodel.currentPlayer).to.equal(2);
        });

        it('check currentPlayer after newGame() on pre-trained vs human game)', function () {
            gamemodel.player1='pre-trained';
            gamemodel.player2='human';
            gamemodel.newGame();
            expect(gamemodel.currentPlayer).to.equal(2);
        });

        it('check currentPlayer after newGame() on random vs random game)', function () {
            gamemodel.player1='random';
            gamemodel.newGame();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after newGame() on random vs pre-trained game)', function () {
            gamemodel.player1='random';
            gamemodel.player2='pre-trained';
            gamemodel.newGame();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after newGame() on pre-trained vs random game)', function () {
            gamemodel.player1='pre-trained';
            gamemodel.newGame();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after newGame() on pre-trained vs pre-trained game)', function () {
            gamemodel.player1='pre-trained';
            gamemodel.player2='pre-trained';
            gamemodel.newGame();
            expect(gamemodel.currentPlayer).to.equal(1);
        });








    });

    describe('testing the gamemodels changeCurrentPlayer() function', function () {

        var gamemodel;

        beforeEach(function(){
            var $injector = angular.injector(['tombola.noughtsAndCrosses.gameModel']);
            gamemodel = $injector.get('gameModel');
        });

        it('check currentPlayer after changeCurrentPlayer() on human vs human game (currentPlayer=1)', function () {
            gamemodel.player2='human';
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(2);
        });

        it('check currentPlayer after changeCurrentPlayer() on human vs human game (currentPlayer=2)', function () {
            gamemodel.currentPlayer=2;
            gamemodel.player2='human';
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after changeCurrentPlayer() on human vs random game', function () {
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after changeCurrentPlayer() on human vs pre-trained game', function () {
            gamemodel.player2='pre-trained';
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after changeCurrentPlayer() on random vs random game', function () {
            gamemodel.player1='random';
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after changeCurrentPlayer() on random vs pre-trained game', function () {
            gamemodel.player1='random';
            gamemodel.player2='pre-trained';
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after changeCurrentPlayer() on random vs human game', function () {
            gamemodel.player1='random';
            gamemodel.player2='human';
            gamemodel.currentPlayer=2;
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(2);
        });

        it('check currentPlayer after changeCurrentPlayer() on pre-trained vs random game', function () {
            gamemodel.player1='pre-trained';
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after changeCurrentPlayer() on pre-trained vs pre-trained game', function () {
            gamemodel.player1='pre-trained';
            gamemodel.player2='pre-trained';
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(1);
        });

        it('check currentPlayer after changeCurrentPlayer() on pre-trained vs human game', function () {
            gamemodel.player1='pre-trained';
            gamemodel.player2='human';
            gamemodel.currentPlayer=2;
            gamemodel.changeCurrentPlayer();
            expect(gamemodel.currentPlayer).to.equal(2);
        });






    });

    describe('testing the gamemodels switchPlayer1() function', function () {

        var gamemodel;

        beforeEach(function () {
            var $injector = angular.injector(['tombola.noughtsAndCrosses.gameModel']);
            gamemodel = $injector.get('gameModel');
        });

        it('check player1 after switchPlayer1() when human', function () {
            gamemodel.player1 = 'human';
            gamemodel.switchPlayer1();
            expect(gamemodel.player1).to.equal('random');
        });

        it('check player1 after switchPlayer1() when random', function () {
            gamemodel.player1 = 'random';
            gamemodel.switchPlayer1();
            expect(gamemodel.player1).to.equal('pre-trained');
        });

        it('check player1 after switchPlayer1() when pre-trained', function () {
            gamemodel.player1 = 'pre-trained';
            gamemodel.switchPlayer1();
            expect(gamemodel.player1).to.equal('human');
        });
    });

    describe('testing the gamemodels switchPlayer2() function', function () {

        var gamemodel;

        beforeEach(function () {
            var $injector = angular.injector(['tombola.noughtsAndCrosses.gameModel']);
            gamemodel = $injector.get('gameModel');
        });

        it('check player2 after switchPlayer2() when human', function () {
            gamemodel.player2 = 'human';
            gamemodel.switchPlayer2();
            expect(gamemodel.player2).to.equal('random');
        });

        it('check player2 after switchPlayer2() when random', function () {
            gamemodel.player2 = 'random';
            gamemodel.switchPlayer2();
            expect(gamemodel.player2).to.equal('pre-trained');
        });

        it('check player2 after switchPlayer2() when pre-trained', function () {
            gamemodel.player2 = 'pre-trained';
            gamemodel.switchPlayer2();
            expect(gamemodel.player2).to.equal('human');
        });
    });

    describe('testing the gamemodels updateModel(data) function', function () {

        var gamemodel;


        beforeEach(function () {
            var $injector = angular.injector(['tombola.noughtsAndCrosses.gameModel']);
            gamemodel = $injector.get('gameModel');
        });

        it('', function () {
            expect(gamemodel.outcome).to.equal('continue');
        });
    });

})();
