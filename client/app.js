var css = require('./index.css'),

  appService = require('./services/app'),
  menuService = require('./services/menu'),
  whiteService = require('./services/white')
  blackService = require('./services/black'),
  timerService = require('./services/timerMaker'),

  appControl = require('./controllers/app'),
  menuControl = require('./controllers/menu'),
  whiteControl = require('./controllers/white'),
  blackControl = require('./controllers/black'),

  angular = require('angular'),
  app = angular.module('app', []);

app.service({
  'appService' : appService,
  'menuService' : menuService,
  'whiteService' : whiteService,
  'blackService' : blackService,
  'timerService' : timerService
});

app.controller({
  'appCtrl' : appControl,
  'menuCtrl' : menuControl,
  'whiteCtrl' : whiteControl,
  'blackCtrl' : blackControl    
});

