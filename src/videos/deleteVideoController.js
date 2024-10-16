"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideoController = void 0;
var db_1 = require("../db/db");
var deleteVideoController = function (req, res) {
    var deletedVideo = db_1.db.videos.find(function (v) { return v.id === +req.params.id; });
    if (!deletedVideo) {
        res.sendStatus(404);
        return;
    }
    else {
        db_1.db.videos = db_1.db.videos.filter(function (v) { return v.id !== +req.params.id; });
        res.sendStatus(204);
    }
};
exports.deleteVideoController = deleteVideoController;
