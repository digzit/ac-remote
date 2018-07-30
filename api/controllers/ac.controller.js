'use strict';

exports.sendCommand = function(req, res) {
  const lirc = require('lirc-client')({
    path: '/var/run/lirc/lircd'
  });
  lirc.on('connect', () => {
    lirc.sendOnce('danby', req.params.command)
    .then(() => {
      res.json({ message: 'Success send command: ' + req.params.command });
    })
    .catch(error => {
      if (error) res.json(error);
    });
  });
};
