export type DBType = {
    videos: any[]
}

export type VideoDBType = {
    id: number,
    title: string
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