/*
(function() {
    'use strict';
    describe('testing the api service', function () {

        var $httpBackend;
        var gameApi;

        beforeEach(function () {

            inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
            });
            //angular.module('tombola.noughtsAndCrosses.apiService')

            angular.mock.module(function ($provide) {
                $provide.value('$http', 'foo');
            });




            var $injector = angular.injector(['tombola.noughtsAndCrosses.apiService']);
            gameApi = $injector.get('apiService');
            console.log('************************************');
            console.log(gameApi);
            console.log('************************************');

        });
        it('check a random vs random game for a win', function () {
          */
/*
          $httpBackend
                .expectPOST('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame',{'player1':'random','player2':'random'})
                .respond({'outcome':'Win','gameboard':'111212122','winner':'1'});
            gameApi
                .newGame('random','random')
                .then(function(data){
                    expect(data.outcome).to.equal('Win');
                    expect(data.gameboard).to.equal('111212122');
                    expect(data.winner).to.equal('1');
                });*//*


        });

        */
/*afterEach(function(){
                $httpBackend.flush();
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();

            }
        );*//*


    });
})();
*/
