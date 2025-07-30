import mongoose from "mongoose";

async function  connectDb(){
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connected successfully on ${connect.connection.host}`)
        
    } catch (error) {
        console.error("mongodb connection failed: ",error)
        process.exit(1)
    }
}

export default connectDb