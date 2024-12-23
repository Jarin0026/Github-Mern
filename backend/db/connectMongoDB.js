import mongoose from "mongoose";

export default async function connectMongoDb(){
    try {
        await mongoose.connect(process.env.MONG0_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error Connecting to MongoDb: ",error.message);
    }
}