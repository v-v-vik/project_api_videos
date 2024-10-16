import {Request, Response} from 'express';
import {db, VideoDBType} from '../db/db';
import {BodyType, ParamType} from "./some";
import {InputVideoType, Resolutions, ResolutionsString, UpdateVideoInputModel} from "../input-output-types/video-types";
import {OutputErrorsType} from "../input-output-types/output-errors-type";



const inputValidation = (video: UpdateVideoInputModel) => {
    const errors: OutputErrorsType = {
        errorsMessages: []
    }

    if (!Array.isArray(video.availableResolutions) || !video.availableResolutions.length || video.availableResolutions.find(p => !Resolutions[p])) {
        errors.errorsMessages.push({
            message: "error", field: "availableResolutions"
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
    if (video.minAgeRestriction > 18) {
        errors.errorsMessages.push({
            message: "error", field: "minAgeRestriction"
        })
    }
    if (typeof video.canBeDownloaded !== "boolean") {
        errors.errorsMessages.push({
            message: "error", field: "canBeDownloaded"
        })
    }

    if (!video.publicationDate || new Date(Date.parse(video.publicationDate)).toISOString() !== video.publicationDate) {
        errors.errorsMessages.push({
            message: "error", field: "publicationDate"
        })
    }

    // if (typeof video.publicationDate !== "string") {
    //     errors.errorsMessages.push({
    //         message: "error", field: "publicationDate"
    //     })
    // }

     return errors;
    }


export const updateVideoController = (req: Request<ParamType, BodyType>, res: Response <any>) => {
    const errors: OutputErrorsType = inputValidation(req.body);

    if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors)
        return;
    }

    let foundVideo = db.videos.find(v => v.id === +req.params.id);
    if (!foundVideo) {
        res.sendStatus(404);
        return;
    }

    let foundIndex = db.videos.indexOf(v => v.id === +req.params.id);

    const date = new Date()
    const videoResolutions:ResolutionsString[] = req.body.availableResolutions;

    db.videos[foundIndex] = {...db.videos[foundIndex],
       title: req.body.title,
       author: req.body.author,
       canBeDownloaded: req.body.canBeDownloaded,
       minAgeRestriction: req.body.minAgeRestriction,
       publicationDate: req.body.publicationDate,
       availableResolutions: videoResolutions
    }

    // const replacementVideo = {
    //     id: +req.params.id,
    //     title: req.body.title,
    //     author: req.body.author,
    //     canBeDownloaded: req.body.canBeDownloaded,
    //     minAgeRestriction: req.body.minAgeRestriction,
    //     publicationDate: req.body.publicationDate,
    //
    //     availableResolutions: videoResolutions
    // }
    // db.videos.splice(foundIndex, 1, replacementVideo);
    console.log(db.videos);

    res
        .sendStatus(204)

}

