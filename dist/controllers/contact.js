"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postContact = function postContact(req, res, next) {
  try {
    if (_validator["default"].isEmpty(req.body.subject)) {
      throw new _utils.ErrorHandler(404, 'Please enter subject');
    }

    if (_validator["default"].isEmpty(req.body.content)) {
      throw new _utils.ErrorHandler(404, 'Please enter content');
    }

    (0, _utils.sendMail)(req.body.subject, req.body.content).then(function () {
      return res.status(200).json({
        status: 'ok',
        message: 'Success'
      });
    })["catch"](function () {
      throw new _utils.ErrorHandler(500, 'Internal server error');
    });
  } catch (error) {
    next(error);
  }
};

var _default = postContact;
exports["default"] = _default;