import {Request, Response} from 'express';
import {db, VideoDBType} from '../db/db';
import {ParamType} from "./some";

export const findVideoController = (req: Request<ParamType>, res: Response <any>) => {
    const foundVideo: VideoDBType = db.videos.find(v => v.id === +req.params.id);
    if (!foundVideo) {
        res.sendStatus(404);
        return;
    }

    res
        .status(200)
        .json(foundVideo)
}