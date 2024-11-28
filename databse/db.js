import mongoose from "mongoose";

const dbConnection = async ()=>{
    await mongoose.connect('mongodb+srv://admin:admin@cluster20.veja3.mongodb.net/sms_portal_mern')
}

export default dbConnection;