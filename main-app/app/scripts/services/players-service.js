angular.module('noughtsAndCrossesApp')
    .service('playersService',['$http','gameModel',function($http,gameModel) {


    this.changePlayer1Type= function () {
        if (gameModel.player1 === 'human') {
            gameModel.player1 = 'random';
        }
        else if (gameModel.player1 === 'random') {
            gameModel.player1 = 'pre-trained';
        }
        else {
            gameModel.player1 = 'human';
        }
    };

    this.changePlayer2Type= function () {
        if (gameModel.player2 === 'human') {
            gameModel.player2 = 'random';
        }
        else if (gameModel.player2 === 'random') {
            gameModel.player2 = 'pre-trained';
        }
        else {
            gameModel.player2 = 'human';
        }
    };

    this.changeCurrentPlayer =function () {

        if (gameModel.currentPlayer === 1 && gameModel.player2 === 'human') {
            gameModel.currentPlayer = 2;
        }
        else if (gameModel.currentPlayer === 2 && gameModel.player1 === 'human') {
            gameModel.currentPlayer = 1;
        }
    };
}]);