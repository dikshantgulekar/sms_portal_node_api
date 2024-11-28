import mongoose from "mongoose";

const Schema = mongoose.Schema;

const grpSchema = new Schema({
    grpName : String
})

const grpModel = mongoose.model('groups', grpSchema);

export default grpModel;