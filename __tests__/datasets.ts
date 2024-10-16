import {DBType, VideoDBType} from "../src/db/db";
import {Resolutions} from "../src/input-output-types/video-types";


export const video1: VideoDBType = {
    id: Date.now() + Math.random(),
    title: 't' + Date.now() + Math.random(),
    author: "Author",
    canBeDownloaded: false,
    minAgeRestriction: null,
    createdAt: "string",
    publicationDate: Date.now().toString(),
    availableResolutions: [Resolutions.P144, Resolutions.P240]
}

export const dataset1: DBType = {
    videos: [video1],
}