import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DBURL=process.env.DBURL;
export const db_connect=async(database)=>{
    return mongoose.connect(`${DBURL}/${database}`)
}