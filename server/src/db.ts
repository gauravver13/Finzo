import mongoose from "mongoose";

// Load env variables
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB Connected...");
        
    } catch (error: any) {
        console.error(`Error MESSAGE: ${error.message}`);
        console.error(`Database Connection failed: ${error}`);
        process.exit(1);
    }
}

export default connectDB;