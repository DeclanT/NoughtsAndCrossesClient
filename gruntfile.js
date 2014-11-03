
var copyTask = require('./.grunt/copytask');
var cleanTask = require('./.grunt/cleantask');
var jshintTask = require('./.grunt/jshinttask');
var fileWatchTask = require('./.grunt/filewatchertask');
var includeReplaceTask = require('./.grunt/includereplacetask');
var lessTask = require('./.grunt/lessTask');
var expressTask = require('./server/server.js');


module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: copyTask,
        clean: cleanTask,
        jshint: jshintTask,
        watch: fileWatchTask,
        includereplace: includeReplaceTask,
        less: lessTask,
        server: expressTask,

    });


    var port = 35002;
    grunt.registerTask('server', 'starts the express server', function(){
        expressTask.listen(port, function() {
            console.log('Express server listening on ' + port);
        });
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('nostart',['jshint','clean:all','copy','includereplace','less' ]);
    grunt.registerTask('default',['nostart','server', 'watch']);
};


