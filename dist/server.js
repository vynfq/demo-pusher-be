"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _chalk = _interopRequireDefault(require("chalk"));

var _error = require("./utils/error");

var _contact = _interopRequireDefault(require("./controllers/contact"));

var _home = _interopRequireDefault(require("./controllers/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Module dependencies.
 */

/**
 * Controllers (route handlers).
 */

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
_dotenv["default"].config({
  path: '.env'
});

var app = (0, _express["default"])();
/**
 * Express configuration.
 */

app.set('port', process.env.PORT || 8080);
app.use(_bodyParser["default"].json()); // support json encoded bodies

app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // support encoded bodies

app.use((0, _cors["default"])());
/**
 * Primary app routes.
 */

app.get('/', _home["default"]);
app.post('/contact', _contact["default"]);
/**
 * Error Handler.
 */

app.use(function (err, req, res, next) {
  return (0, _error.handleError)(err, res);
});
/**
 * Start Express server.
 */

app.listen(app.get('port'), function () {
  console.log('%s App is running at http://localhost:%d in %s mode', _chalk["default"].green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});