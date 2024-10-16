"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideoController = void 0;
var db_1 = require("../db/db");
var video_types_1 = require("../input-output-types/video-types");
var inputValidation = function (video) {
    var errors = {
        errorsMessages: []
    };
    if (!Array.isArray(video.availableResolution) || !video.availableResolution.length || video.availableResolution.find(function (p) { return !video_types_1.Resolutions[p]; })) {
        errors.errorsMessages.push({
            message: "error", field: "availableResolution"
        });
    }
    if (!video.title || video.title.length > 40) {
        errors.errorsMessages.push({
            message: "error", field: "title"
        });
    }
    if (!video.author || video.author.length > 20) {
        errors.errorsMessages.push({
            message: "error", field: "author"
        });
    }
    // if (typeof video.canBeDownloaded !== "boolean")
    return errors;
};
var updateVideoController = function (req, res) {
    if (!req.body.title) {
        res.sendStatus(400);
        return;
    }
    var foundVideo = db_1.db.videos.find(function (v) { return v.id === +req.params.id; });
    if (!foundVideo) {
        res.sendStatus(404);
        return;
    }
    foundVideo.title = req.body.title;
    res
        .sendStatus(204)
        .json(foundVideo);
};
exports.updateVideoController = updateVideoController;
