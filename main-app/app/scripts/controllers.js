noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope,gameModel){

    $scope.gameModel = gameModel;
    $scope.displayoutcome=function(){
        console.log($scope.gameModel.gameBoard);
    };
});
