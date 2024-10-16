"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.SETTINGS = {
    PORT: process.env.port || 3000,
    PATH: {
        VIDEOS: "/videos",
    }
};
