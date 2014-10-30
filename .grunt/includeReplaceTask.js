/**
 * Created by lewis.gardner on 28/10/2014.
 */

module.exports = {
    html: {
        src: 'main-app/app/*.html',
        dest: '.build/',
        expand:true,
        cwd: ''
    },
    css: {
        src: 'main-app/app/Less/*.*',
        dest: '.build/',
        expand:true,
        cwd: ''
    }
};