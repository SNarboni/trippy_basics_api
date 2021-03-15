const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    people: Number,
    price: Number,
    isBathroom: Boolean,
    hotels :  [{type : mongoose.Types.ObjectId, ref:"hotels"}]
});


const roomSchema = mongoose.model("rooms", roomSchema);

module.exports = roomSchema;