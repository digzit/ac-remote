'use strict';

module.exports = function(app) {
  var ac = require('../controllers/ac.controller');

  app.route('/ac/:command')
    .post(ac.sendCommand);
};
