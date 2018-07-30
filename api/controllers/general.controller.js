'use strict';

exports.listCommands = function(req, res) {
  const lirc = require('lirc-client')({
    path: '/var/run/lirc/lircd'
  });
  lirc.on('connect', () => {
    lirc.list(req.params.remoteName)
    .then( response => {
      res.json(response);
    })
    .catch(error => {
      if (error) res.json(error);
    });
  });
};
