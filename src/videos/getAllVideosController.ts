import {Request, Response} from 'express';
import {db} from '../db/db';

export const getAllVideosController = (req: Request, res: Response <any>) => {
    const videos = db.videos;
    res
        .status(200)
        .json(videos)
}