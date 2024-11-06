import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3031;
export const ENVIRONMENT = process.env.ENVIRONMENT;
export const REG_KEY = process.env.REG_KEY;
export const DB_URL = process.env.DB_URL;
