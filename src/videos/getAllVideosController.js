"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllVideosController = void 0;
var db_1 = require("../db/db");
var getAllVideosController = function (req, res) {
    var videos = db_1.db.videos;
    res
        .status(200)
        .json(videos);
};
exports.getAllVideosController = getAllVideosController;
