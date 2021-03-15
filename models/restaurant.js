const mongoose = require("mongoose");

//Restaurant Table
//1. Create a Schema
const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  country: String,
  stars: {type : Number, max: 3, min : 1},
  cuisine: String,
  priceCategory: {type : Number, max: 3, min : 1},
  tables: [{ type: mongoose.Types.ObjectId, ref: "tables" }],
});
//Create Model
const restaurantModel = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurantModel;
