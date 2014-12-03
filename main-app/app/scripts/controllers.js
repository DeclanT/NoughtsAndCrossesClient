noughtsAndCrossesApp.controller('noughtsAndCrossesController',function ($scope,$http,gameModel,apiService) {

    $scope.gameModel = gameModel;

    $scope.newGame = function () {
        apiService.newGame();
    };

    $scope.makeMove = function (squareNumber) {
        apiService.makeMove(squareNumber);
    };

    $scope.changePlayer1Type = function(){
        gameModel.changePlayer1Type();
    };

    $scope.changePlayer2Type = function(){
        gameModel.changePlayer2Type();
    };

});