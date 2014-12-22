(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.directives')
        .directive('myDirective', function () {
            return {
                restrict: 'E',
                replace:true,
                scope:true,
                template: function(element, attributes){
                    return '<img ng-click="makeMove(' + attributes.squareNumber + ')" class="gamesquare showplayer{{gameModel.gameboard[' + attributes.squareNumber + ']}}" src="images/blank.png">';
                }
            };
        });
})();