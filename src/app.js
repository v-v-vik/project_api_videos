"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = require("express");
var cors_1 = require("cors");
var settings_1 = require("./settings");
var videos_1 = require("./videos");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.get("/", function (req, res) {
    res
        .status(200)
        .json({ version: '1.0' });
});
exports.app.use(settings_1.SETTINGS.PATH.VIDEOS, videos_1.videoRouter);
