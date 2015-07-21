var css = require('./index.css'),
  angular = require('angular'),
  mainControl = require('./controllers/main'),
  menuControl = require('./controllers/menu'),
  whiteControl = require('./controllers/white'),
  blackControl = require('./controllers/black'),
  app = angular.module('app', []);

app.controller({
  'appCtrl' : mainControl,
  'mainCtrl' : menuControl,
  'whiteCtrl' : whiteControl,
  'blackCtrl' : blackControl    
});

