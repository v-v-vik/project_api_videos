import { config } from "dotenv";
config()

export const SETTINGS = {
    PORT: process.env.port || 3000,
    PATH: {
        VIDEOS: "/videos",
    }
}