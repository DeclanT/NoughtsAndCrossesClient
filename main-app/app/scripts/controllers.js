noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope,$http,gameModel) {

    $scope.gameModel = gameModel;

    $scope.newGame = function () {
        gameModel.newGame();
    };

    $scope.makeMove = function (squareNumber) {
        gameModel.makeMove(squareNumber);
    };

    $scope.changePlayer1Type = function(){
        gameModel.changePlayer1Type();
    };

    $scope.changePlayer2Type = function(){
        gameModel.changePlayer2Type();
    };

});