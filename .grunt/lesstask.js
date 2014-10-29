module.exports =  {

    src: {
        cwd: '',
        src: 'main-app/app/Less/*',
        dest: '.build/',
        expand: true,
        ext: '.min.css'
    },

    options:{
        compress: true,
        csslint:{
            'unique-headings':false,
        }
    }
};
