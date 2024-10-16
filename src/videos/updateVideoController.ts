import {Request, Response} from 'express';
import {db, VideoDBType} from '../db/db';
import {BodyType, ParamType} from "./some";
import {InputVideoType, Resolutions, UpdateVideoInputModel} from "../input-output-types/video-types";
import {OutputErrorsType} from "../input-output-types/output-errors-type";



const inputValidation = (video: UpdateVideoInputModel) => {
    const errors: OutputErrorsType = {
        errorsMessages: []
    }

    if (!Array.isArray(video.availableResolution) || !video.availableResolution.length || video.availableResolution.find(p => !Resolutions[p])) {
        errors.errorsMessages.push({
            message: "error", field: "availableResolution"
        })
    }
    if (!video.title || video.title.length > 40) {
        errors.errorsMessages.push({
            message: "error", field: "title"
        })
    }
    if (!video.author || video.author.length > 20) {
        errors.errorsMessages.push({
            message: "error", field: "author"
        })
    }
    // if (video.minAgeRestriction > 18) {
    //     errors.errorsMessages.push({
    //         message: "error", field: "minAgeRestriction"
    //     })

        return errors
}
export const updateVideoController = (req: Request<ParamType, BodyType>, res: Response <any>) => {
    const errors: OutputErrorsType = inputValidation(req.body);

    if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors)
        return
    }

    let foundVideo = db.videos.find(v => v.id === +req.params.id);
    if (!foundVideo) {
        res.sendStatus(404);
        return;
    }

    const date = new Date()
    const videoResolutions:Resolutions[] = req.body.availableResolution;

    foundVideo = {
        title: req.body.title,
        author: req.body.author,
        canBeDownloaded: req.body.canBeDownloaded,
        minAgeRestriction: req.body.minAgeRestriction,
        publicationDate: date.toISOString(),
        availableResolution: videoResolutions
    }
    res
        .sendStatus(204)
        .json(foundVideo)
}

