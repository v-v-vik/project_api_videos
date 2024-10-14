import {DBType, VideoDBType} from "../src/db/db";


export const video1: VideoDBType = {
    id: Date.now() + Math.random(),
    title: 't' + Date.now() + Math.random(),
}

export const dataset1: DBType = {
    videos: [video1],
}