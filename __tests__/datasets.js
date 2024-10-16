"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataset1 = exports.video1 = void 0;
var video_types_1 = require("../src/input-output-types/video-types");
exports.video1 = {
    id: Date.now() + Math.random(),
    title: 't' + Date.now() + Math.random(),
    author: "Author",
    canBeDownloaded: false,
    minAgeRestriction: null,
    createdAt: "string",
    publicationDate: Date.now().toString(),
    availableResolution: [video_types_1.Resolutions.P144, video_types_1.Resolutions.P240]
};
exports.dataset1 = {
    videos: [exports.video1],
};
