
module.exports =  {

    scripts: {
        files:"main-app/app/scripts/*.js",
        tasks:["jshint","clean:scripts","copy:scripts"],
        options:{
            spawn:false,
        },
    },

    images: {
        files:"main-app/app/images/**",
        tasks:["clean:images","copy:images"],
        options:{
            spawn:false,
        },
    },

    grunt:{
        files:".grunt/*.js",
        tasks:["nostart"],
        options:{
            spawn:false,
        },
    },

    less: {
        files:"main-app/app/less/**",
        tasks:["clean:css","less"],
        options:{
            spawn:false,
        },
    },

};

