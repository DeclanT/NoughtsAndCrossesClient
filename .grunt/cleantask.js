module.exports =  {
    script: {
        src: ".build/main-app/app/scripts/*.js", dest: ".build/", expand: true, cwd: ""
    },
    images: {
        src: ".build/main-app/app/images/*", dest: ".build/", expand:true, cwd: ""
    },
    html: {
        src: ".build/main-app/app/*.html", dest: ".build", expand:true, cwd: ""
    },
    css: {
        src: ".build/main-app/app/CSS/*.*", dest: ".build", expand:true, cwd: ""
    }
};






