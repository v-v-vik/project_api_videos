import {Request, Response} from 'express';
import {db, VideoDBType} from '../db/db';
import {BodyType, ParamType} from "./some";

export const updateVideoController = (req: Request<ParamType, BodyType>, res: Response <any>) => {
    if (!req.body.title) {
        res.sendStatus(400);
        return;
    }

    const foundVideo: VideoDBType = db.videos.find(v => v.id === +req.params.id);
    if (!foundVideo) {
        res.sendStatus(404);
        return;
    }

    foundVideo.title = req.body.title;
    res
        .sendStatus(204)
        .json(foundVideo)
}

