import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async ()=>{
    try {
    const connctionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected ! Host:${connctionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connction error form DB/index",error);
        console.log(process.env.MONGO_URI)
        process.exit(1)
    }
}

export {connectDB}