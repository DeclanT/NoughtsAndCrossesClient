noughtsAndCrossesApp.service('apiService',function($http,gameModel) {

    return {
        serverPost: {
            method: 'POST',
            url: '',
            'withCredentials': 'true',
            headers: {
                'content-type': 'application/json'
            },
            data: '',
        },

        newGame: function () {
            var me = this;
            me.serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/newgame';
            me.serverPost.data = {'player1':gameModel.player1, 'player2':gameModel.player2};
            $http(me.serverPost).
                success(function (data) {
                    gameModel.outcome = data.outcome;
                    gameModel.gameboard = data.gameboard;
                    gameModel.winner = data.winner;
                    gameModel.changeCurrentPlayer();
                });
        },

        makeMove: function (squareNumber) {
            var me = this;
            me.serverPost.url = 'http://tictactoe1.cloudapp.net:35000/api/v1.0/makemove';
            me.serverPost.data = {'playerNumber': gameModel.currentPlayer, 'chosenSquare': squareNumber};
            $http(me.serverPost).
                success(function (data) {
                    gameModel.outcome = data.outcome;
                    gameModel.gameboard = data.gameboard;
                    gameModel.winner = data.winner;
                    gameModel.changeCurrentPlayer();
                });
        }
    };
});