app.service('appService', function () {
  var whoseTurn = 'menu';

  this.setPlayer = function (player) {
    whoseTurn = player;
  };

  this.getPlayer = function () {
    return whoseTurn;
  };
});

