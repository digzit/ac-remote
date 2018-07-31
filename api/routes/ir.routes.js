'use strict';

module.exports = function(app) {
  var general = require('../controllers/general.controller');
  var ac = require('../controllers/ir.controller');

  app.route('/list/:remoteName')
    .get(general.listCommands)

  app.route('/:remoteName/:command')
    .post(ir.sendCommand);
};
