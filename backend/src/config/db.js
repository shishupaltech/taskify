import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb is connected successfully!...");
    } catch (error) {
        console.error("Error in connecting mongodb!..", error);
        process.exit(1)// exit with failure.

    }
    
}
export default connectDb;