'use strict';

module.exports = function(app) {
  var general = require('../controllers/general.controller');
  var ac = require('../controllers/ac.controller');

  app.route('/list/:remoteName')
    .get(general.listCommands)

  app.route('/ac/:command')
    .post(ac.sendCommand);
};
