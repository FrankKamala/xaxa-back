import mongoose from "mongoose";

const cardSchema = mongoose.Schema({

    name: String,
    imageUrl:String,
    bio:String,
    dob:Date,
    onlineStatus:int


})
export default mongoose.model('cards', cardSchema)