angular.module('noughtsAndCrossesApp')
    .controller('noughtsAndCrossesController',['$scope','$http','gameModel','apiService','playersService',function ($scope,$http,gameModel,apiService,playersService) {

    $scope.gameModel = gameModel;

    $scope.newGame = function () {
        apiService.newGame();
    };

    $scope.makeMove = function (squareNumber) {
        apiService.makeMove(squareNumber);
    };

    $scope.changePlayer1Type = function(){
        playersService.changePlayer1Type();
    };

    $scope.changePlayer2Type = function(){
        playersService.changePlayer2Type();
    };

}]);