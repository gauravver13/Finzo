import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB Connected...");
        
    } catch (error: any) {
        console.error(`Error MESSAGE: ${error.message}`);
        console.error(`Database Connection failed: ${error}`);
        process.exit(1);
    }
}

export default connectDB;