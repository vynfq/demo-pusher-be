"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "handleError", {
  enumerable: true,
  get: function get() {
    return _error.handleError;
  }
});
Object.defineProperty(exports, "ErrorHandler", {
  enumerable: true,
  get: function get() {
    return _error.ErrorHandler;
  }
});
Object.defineProperty(exports, "sendMail", {
  enumerable: true,
  get: function get() {
    return _sendMail["default"];
  }
});

var _error = require("./error");

var _sendMail = _interopRequireDefault(require("./sendMail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }