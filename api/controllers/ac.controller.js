'use strict';

const lirc = require('lirc-client')({
  host: '127.0.0.1',
  port: 8765
});

// exports.acceptAgreement = function(req, res) {
//   let errorObj = {};
//   instance({
//     method: 'post',
//     url: '/user/accept-agreement',
//     data: req.body,
//     headers: utils.getHeaders(req.get('token'))
//   })
//     .then(function(response) {
//       res.json(response.data);
//     })
//     .catch(function(error) {
//       errorObj = utils.handleErrorMessage(error);
//       console.error(
//         utils.getErrorMessage(controllerName, 'acceptAgreement', error)
//       );
//       res.status(error.response.status).send(errorObj);
//     });
// };

exports.sendCommand = function(req, res) {
  lirc.on('connect', function () {
    lirc.cmd('SEND_ONCE', 'danby', req.params.command, function (err) {
      if (err)
        console.log(err);
      else
        res.json({ message: 'Success send command: ' + req.params.command });
    });
  });
};
