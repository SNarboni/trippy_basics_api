const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
    seat: Number,
    isVIP: Boolean,
    restaurants :  [{type : mongoose.Types.ObjectId, ref:"restaurants"}]
});


const tableSchema = mongoose.model("tables", tableSchema);

module.exports = tableSchema;