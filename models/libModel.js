import mongoose from "mongoose";

const Schema = mongoose.Schema;

const libSchema = new Schema({
    libName : String
})

const libModel = mongoose.model('libraries', libSchema);

export default libModel;