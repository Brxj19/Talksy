import mongoose from "mongoose";


export const connectDB = async () => {
    try{
        // console.log('Mongo URI:', process.env.MONGODB_URI);

        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(err){
        console.log(`Error: ${err.message}`);
    }
}