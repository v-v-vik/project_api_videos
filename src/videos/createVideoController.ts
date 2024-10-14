import {Request, Response} from 'express';
import {db, VideoDBType} from '../db/db';
import {BodyType} from "./some";

export const createVideoController = (req: Request<BodyType>, res: Response <any>) => {
    if (!req.body.title) {
        res.sendStatus(400);
        return;
    }

    const newVideo: VideoDBType = {
        id: db.videos.length + 1,
        title: req.body.title
    };

    db.videos.push(newVideo);

    res
        .status(201)
        .json(newVideo)
}