import mongoose from "mongoose";
import { db_NAME } from "../constants.js";



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${db_NAME}`);
        console.log(`Connected to MongoDB DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;