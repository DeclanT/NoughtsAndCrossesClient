noughtsAndCrossesApp.factory('gameModel',function($http) {


    var model = function () {
        outcome = 'Continue';
        gameboard = '000000000';
        winner = 0;

        serverPost = {
            method: 'POST',
            url: '',
            'withCredentials': 'true',
            headers: {
                'content-type': 'application/json'
            },
            data: '',
        };

        newGame = function () {
            serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame';
            serverPost.data = {'player1':'random', 'player2':'human'};
            $http(serverPost).
                success(function (data) {
                    model.outcome = data.outcome;
                    model.gameboard = data.gameboard;
                    model.winner = data.winner;
                });
        };

        makeMove = function (squareNumber) {
            serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/makemove';
            serverPost.data = {'playerNumber': 2, 'chosenSquare': squareNumber};
            $http(serverPost).
                success(function (data) {
                    model.outcome = data.outcome;
                    model.gameboard = data.gameboard;
                    model.winner = data.winner;
                });
        };
    };
    return model;
});