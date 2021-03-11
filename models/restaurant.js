const mongoose = require("mongoose");


//Restaurant Table
 //1. Create a Schema
 const restaurantSchema = new mongoose.Schema({
   
    name : String,
    address : String,
    city : String,
    country : String,
    stars : Number,
    cuisine : String,
    priceCategory : Number
 });
 //Create Model
 const restaurantModel = mongoose.model("restaurants", restaurantModel)

 module.exports = restaurantModel;