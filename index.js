const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");

mongoose.connect("mongodb://localhost:27017/trippy_binome", () => {
  console.log("connecté");
});

const port = 8000;
const app = express();

app.listen(port, () => {
  console.log(`conecté a http://localhost:${port}/hotels`);
});

app.use(bodyParser.json());

app.get("/hotels", async (req, res) => {
  const hotels = await hotelModel.find();
  res.json(hotels);
});

app.get("/hotels/:id", async (req, res) => {
  const hotels = await hotelModel.findById(req.params.id, function (err, user) {
    res.json(user);
  });
});

app.post("/hotels", async (req, res) => {
  await hotelModel.create({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    stars: req.body.stars,
    hasSpa: req.body.hasSpa,
    hasPool: req.body.hasPool,
    priceCategory: req.body.priceCategory,
  });

  res.send(`${req.body.name} à bien été ajouté à la liste`);
  console.log(req.body);
});
