import mongoose from "mongoose";

const cardSchema = mongoose.Schema({

    name: String,
    imageUrl:String,
    bio:String,
    dob:Date,
    onlineStatus:Number


})
export default mongoose.model('cards', cardSchema)