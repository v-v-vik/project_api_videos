"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findVideoController = void 0;
var db_1 = require("../db/db");
var findVideoController = function (req, res) {
    var foundVideo = db_1.db.videos.find(function (v) { return v.id === +req.params.id; });
    if (!foundVideo) {
        res.sendStatus(404);
        return;
    }
    res
        .status(200)
        .json(foundVideo);
};
exports.findVideoController = findVideoController;
