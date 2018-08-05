var gulp = require('flarum-gulp');

gulp({
  modules: {
    'extum/flarum-ext-auth-yahoo': [
      'src/**/*.js',
    ]
  }
});
