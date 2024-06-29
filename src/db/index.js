import mongoose from "mongoose";
 
const connectToDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.diet_management}`);
        console.log("mongodb connected ");
    } catch (error) {
        console.log("Error : "+error)
        process.exit(1);
    }
}

export default connectToDb;