import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`Connected to MongoDB successfully. DB_HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("Error while connecting to database.", error);
        process.exit(1)
    }
}

export default connectDB