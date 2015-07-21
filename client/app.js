var css = require('./index.css'),
  angular = require('angular'),
  appService = require('./services/app'),
  menuService = require('./services/menu'),
  whiteService = require('./services/white')
  blackService = require('./services/black'),
  appControl = require('./controllers/app'),
  menuControl = require('./controllers/menu'),
  whiteControl = require('./controllers/white'),
  blackControl = require('./controllers/black'),
  app = angular.module('app', []);

app.service({
  'appService' : appService,
  'menuService' : menuService,
  'whiteService' : whiteService,
  'blackService' : blackService
});

app.controller({
  'appCtrl' : appControl,
  'menuCtrl' : menuControl,
  'whiteCtrl' : whiteControl,
  'blackCtrl' : blackControl    
});

