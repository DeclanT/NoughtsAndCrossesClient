
module.exports =  {





    scripts: {
        files:"main-app/app/scripts/*.js",
        tasks:["jshint","clean","copy"],
        options:{
            spawn:false,
        },
    },

    images: {
        files:"main-app/app/images/*.*",
        tasks:["clean","copy"],
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

};