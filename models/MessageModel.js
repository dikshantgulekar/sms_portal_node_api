import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    libid : String,
    message : String
})

const messageModel = mongoose.model('messages', messageSchema);

export default messageModel;