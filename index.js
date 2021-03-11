const mongoose = require("mongoose");
const express = require("express");

const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");

mongoose.connect("mongodb://localhost:27017/trippy_binome", () => {
  console.log("connecté");
});

const port = 8000;
const app = express();

app.listen(port, () => {
    console.log("server start :", port)
})

app.get("/hotels", async (req, res) => {
    const hotels = await hotelModel.find()  
    res.json(hotels);
});


app.get("/hotels/:id", async (req, res) => {
    const hotels = await hotelModel.find()
    res.json(hotels);
});

app.post("hotels", async (req, res) => {
    await hotelModel.create({

    })
})
