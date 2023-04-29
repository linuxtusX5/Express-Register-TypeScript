import mongoose from "mongoose";
import config from "config";
import logger from './logger';

export default async function connect() {
    const dbUri: string = config.get("dbUri");
    try {
        await mongoose.connect(dbUri);
        logger.info("DB connected");
    } catch (error) {
        logger.error("Could not connect to db");
        process.exit(1);
    }
}