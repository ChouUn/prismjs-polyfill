'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugins = exports.themes = exports.languages = undefined;

var _langs = require('./langs');

var _langs2 = _interopRequireDefault(_langs);

var _plugins = require('./plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _themes = require('./themes');

var _themes2 = _interopRequireDefault(_themes);

var _prism = require('./prism');

var _prism2 = _interopRequireDefault(_prism);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.languages = _langs2.default;
exports.themes = _themes2.default;
exports.plugins = _plugins2.default;
exports.default = _prism2.default;