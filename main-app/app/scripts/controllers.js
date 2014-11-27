noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope,$http,gameModel){

    var newGame ={
        method:'POST',
        url:'http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame',
        headers:{
            'content-type':'application/json'
        },
        'withCredentials':'true',
        data:{'player1': 'random', 'player2':'human' },
    };


$scope.newGame=function() {
    $http(newGame).
        success(function (data) {
            $scope.gameModel = data;
        });
};

    $scope.gameModel = gameModel;

    $scope.makeMove = function(squareNumber){
        var makeMove={
            method:'POST',
            url:'http://tictactoe1.cloudapp.net:35000/api/v1.0/makemove',
            headers:{
                'content-type':'application/json'
            },
            'withCredentials':'true',
            data:{'playerNumber':2, 'chosenSquare':squareNumber},
        };

        $http(makeMove).
            success(function (data) {
                $scope.gameModel = data;
            });
    };
});
