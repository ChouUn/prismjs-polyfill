"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var langs_1 = require("./langs");
exports.languages = langs_1.default;
var plugins_1 = require("./plugins");
exports.plugins = plugins_1.default;
var themes_1 = require("./themes");
exports.themes = themes_1.default;
require("./prism");
__export(require("prismjs"));
