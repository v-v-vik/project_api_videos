"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideoController = void 0;
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
    return errors;
};
var createVideoController = function (req, res) {
    var errors = inputValidation(req.body);
    if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors);
        return;
    }
    var videoResolutions = req.body.availableResolution;
    var date = new Date();
    date.setDate(date.getDate() + 1);
    var publicationDate = date.toISOString();
    var newVideo = {
        id: db_1.db.videos.length + 1,
        title: req.body.title,
        author: req.body.author,
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: new Date().toISOString(),
        publicationDate: publicationDate,
        availableResolution: videoResolutions
    };
    db_1.db.videos.push(newVideo);
    res
        .status(201)
        .json(newVideo);
};
exports.createVideoController = createVideoController;
