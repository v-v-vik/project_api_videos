"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllVideosController = void 0;
var db_1 = require("../db/db");
var deleteAllVideosController = function (req, res) {
    db_1.db.videos = [];
    res.sendStatus(204);
};
exports.deleteAllVideosController = deleteAllVideosController;
