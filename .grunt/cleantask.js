module.exports =  {

    script: {
        cwd: "",
        src: ".build/main-app/app/scripts/*.js",
        dest: ".build/",
        expand: true,
    },

    images: {
        cwd: "",
        src: ".build/main-app/app/images/*",
        dest: ".build/",
        expand:true,
    },

    css: {
        cwd: "",
        src: ".build/main-app/app/css/",
        expand:true,
    }

};






