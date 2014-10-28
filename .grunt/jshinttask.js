
module.exports =  {


    script: {

        src: "main-app/app/scripts/*.js", dest: ".build/", expand: true, cwd: ""


    },


    file: {src: ".grunt/*.js", dest: ".build/", expand: true, cwd: ""



    },

    grunt: {src: "gruntfile.js", dest: ".build/", expand: true, cwd: ""

    }


};
