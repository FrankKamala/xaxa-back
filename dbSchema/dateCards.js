import mongoose from "mongoose";

const cardSchema = mongoose.Schema({

    name: String,
    imageUrl:String,
    bio:String,
    dob:Date,
    onlineStatus:Number


})
export default mongoose.model('cards', cardSchema)


// [   { name: "Achieng Oneko",
//     imageUrl:"https://twitter.com/Thriving_luos/status/1582688481125765121/photo/1",
//     bio:"Fighing for You",
//     dob:"1920-01-01",
//     onlineStatus:"0"},
//     { name: "Kung'u Karumba",
//     imageUrl:"https://twitter.com/surambaya/status/1267394108030693382/photo/1",
//     bio:"I am the F in your Freedom",
//     dob:"1904-01-01",
//     onlineStatus:"0"},
//     { name: "Fred Kubai",
//     imgUrl: "https://twitter.com/KResearcher/status/1293264463655829506/photo/2",
//     bio:"Kapengurias Finnest",
//     dob:"1917-01-01",
//     onlineStatus:"0"
//     }
// ]