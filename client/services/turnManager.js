app.service('turnManager', function () {
  var internalVariable = 0;

  this.getVariable = function () {
    return internalVariable;
  };
});

