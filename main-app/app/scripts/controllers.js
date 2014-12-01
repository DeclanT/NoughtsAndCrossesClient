noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope,$http,gameModel) {

    $scope.gameModel = gameModel;

    $scope.newGame = function () {
        gameModel.newGame();
    };

    $scope.makeMove = function (squareNumber) {
        gameModel.makeMove(squareNumber);
    };

});