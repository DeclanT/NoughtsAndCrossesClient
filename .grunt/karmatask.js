module.exports = {
    unit:{
        configFile:'karma.conf.js',
        options:{
            files:[
                './bower_components/angular/angular.js',
                './bower_components/angular-mocks/angular-mocks.js',
                './main-app/app/scripts/modules.js',
                './main-app/app/scripts/controllers.js',
                './main-app/app/scripts/services/api-service.js',
                './main-app/app/scripts/services/audiosprite-service.js',
                './main-app/app/scripts/services/constants.js',
                './main-app/app/scripts/services/gamemodel.js',
                './main-app/app/scripts/directives/gamesquare.js',
                './main-app/tests/*.js'

            ]
        }
    }
};
