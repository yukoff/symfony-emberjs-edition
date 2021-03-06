/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'application',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      namespace: 'api/v1',
      host: "//" + process.env.APP_HOST
    },

    contentSecurityPolicy: {
      'connect-src': "'self' " + process.env.APP_HOST,
      'img-src': "'self' " + process.env.APP_HOST,
      'script-src': "'self' 'unsafe-inline' " + process.env.APP_HOST,
      'style-src': "'self' 'unsafe-inline' " + process.env.APP_HOST,
      'font-src': "'self' data: fonts.gstatic.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
