import {Request, Response} from 'express';
import {db, VideoDBType} from '../db/db';
import {InputVideoType, OutputVideoType, Resolutions, ResolutionsString} from "../input-output-types/video-types";
import {OutputErrorsType} from '../input-output-types/output-errors-type';


const inputValidation = (video: InputVideoType) => {
    const errors: OutputErrorsType = {
        errorsMessages: []
    }

    if (!Array.isArray(video.availableResolutions) || video.availableResolutions.find(p => !Resolutions[p])) {
        errors.errorsMessages.push({
            message: "error", field: "availableResolutions"
        })
    }
    if (typeof video.title !== "string" || !video.title || video.title.length > 40) {
        errors.errorsMessages.push({
            message: "error", field: "title"
        })
    }
    if (!video.author || video.author.length > 20) {
        errors.errorsMessages.push({
            message: "error", field: "author"
        })
    }
    return errors
}

export const createVideoController = (req: Request<any, any, InputVideoType>,
                                      res: Response <OutputVideoType | OutputErrorsType | any>) => {

     const errors: OutputErrorsType = inputValidation(req.body);

     if (errors.errorsMessages.length) {
        res
            .status(400)
            .json(errors)
        return
    }
     const videoResolutions:ResolutionsString[] = req.body.availableResolutions;

     const date = new Date()
     date.setDate(date.getDate() + 1);
     const publicationDate = date.toISOString()


    const newVideo: VideoDBType = {
        id: db.videos.length + 1,
        title: req.body.title,
        author: req.body.author,
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: new Date().toISOString(),
        publicationDate: publicationDate,
        availableResolutions: videoResolutions
    };

    db.videos.push(newVideo);

    res
        .status(201)
        .json(newVideo)
    }




