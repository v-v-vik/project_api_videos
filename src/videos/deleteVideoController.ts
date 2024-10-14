import {Request, Response} from 'express';
import {db} from '../db/db';
import {ParamType} from "./some";

export const deleteVideoController = (req: Request<ParamType>, res: Response <any>) => {
    const deletedVideo = db.videos.find(v => v.id === +req.params.id);
    if (!deletedVideo) {
        res.sendStatus(404);
        return;
    } else {
        db.videos = db.videos.filter(v => v.id !== +req.params.id);
        res.sendStatus(204);
    }
}
