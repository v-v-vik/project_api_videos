import {Resolutions} from "../input-output-types/video-types";

export type DBType = {
    videos: any[]
}

export type VideoDBType = {
    id: number,
    title: string,
    author: string,
    canBeDownloaded: boolean,
    minAgeRestriction: null,
    createdAt: string,
    publicationDate: string,
    availableResolution: Resolutions[]
}

export const db: DBType = {
    videos: [],
}

export const setDB = (dataset?:Partial<DBType>)=> {
    if (!dataset) {
        db.videos = []
        return
    }

    db.videos = dataset.videos || db.videos
}