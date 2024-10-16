import {Router} from "express";
import {getAllVideosController} from "./getAllVideosController";
import {createVideoController} from "./createVideoController";
import {findVideoController} from "./findVideoController";
import {deleteVideoController} from "./deleteVideoController";
import {updateVideoController} from "./updateVideoController";
import {deleteAllVideosController} from "./deleteAllVideosController";
import {SETTINGS} from "../settings";

export const videoRouter = Router();

videoRouter.get("/videos", getAllVideosController);
videoRouter.post("/videos", createVideoController);
videoRouter.get("/videos/:id", findVideoController);
videoRouter.put("/videos/:id", updateVideoController);
videoRouter.delete("videos/:id", deleteVideoController);
videoRouter.delete("/testing/all-data", deleteAllVideosController);
