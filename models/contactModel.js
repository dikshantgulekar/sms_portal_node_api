import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    groupid : String,
    contactName : String,
    contactPhone : Number,
    contactEmail : String
})

const contactModel = mongoose.model('contacts', contactSchema);

export default contactModel;