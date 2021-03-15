const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  country: String,
  stars: {type : Number, max: 5, min : 1}, //1 à 5
  hasSpa: Boolean,
  hasPool: Boolean,
  priceCategory: {type : Number, max: 3, min : 1}, //1 à 3
  rooms: [{ type: mongoose.Types.ObjectId, ref: "rooms" }],
});

const hotelModel = mongoose.model("hotels", hotelSchema);

module.exports = hotelModel;
