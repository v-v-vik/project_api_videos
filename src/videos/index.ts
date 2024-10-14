import {Router} from "express";
import {getAllVideosController} from "./getAllVideosController";
import {createVideoController} from "./createVideoController";
import {findVideoController} from "./findVideoController";
import {deleteVideoController} from "./deleteVideoController";
import {updateVideoController} from "./updateVideoController";
import {deleteAllVideosController} from "./deleteAllVideosController";

export const videoRouter = Router();

videoRouter.get("/", getAllVideosController);
videoRouter.post("/", createVideoController);
videoRouter.get("/:id", findVideoController);
videoRouter.put("/:id", updateVideoController);
videoRouter.delete("/:id", deleteVideoController);
videoRouter.delete("/all-data", deleteAllVideosController);
