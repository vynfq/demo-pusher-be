"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var sgMail = require('@sendgrid/mail');

var sendMail = function sendMail(subject, content) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  var msg = {
    to: 'vy.le@nfq.asia',
    from: 'oaivyftu@gmail.com',
    subject: subject,
    text: content
  };
  return sgMail.send(msg);
};

var _default = sendMail;
exports["default"] = _default;