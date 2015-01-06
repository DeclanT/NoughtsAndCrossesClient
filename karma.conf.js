module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha','chai'],

    reporters: ['nyan'],

    port: 8008,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: [/*'Chrome',*/'PhantomJS'],

    singleRun: true,
  });
};
