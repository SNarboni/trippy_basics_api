const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");

const port = 8000;
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/trippy_binome", () => {
  console.log("connecté");
});

app.listen(port, () => {
  console.log(`conecté a http://localhost:${port}/hotels`);
});

// HOTELS

app.get("/hotels", async (req, res) => {
  let limitpage = parseInt(req.query.limit);
  let offset = parseInt(req.query.page) * limitpage;
  const hotels = await hotelModel.find().limit(limitpage).skip(offset);
  res.json(hotels);
  console.log(hotels);
  console.log("------------------");
  console.log("------------------");
  console.log("------------------");
});

app.get("/hotels/:id", async (req, res) => {
  const hotels = await hotelModel.findById(
    req.params.id,
    function (err, hotel) {
      res.json(hotel);
    }
  );
});

app.post("/hotels", async (req, res) => {
  try {
    await hotelModel.create(req.body);
    res.send(`${req.body.name} à bien été ajouté à la liste`);
  } catch (err) {
    console.log(err);
  }
});

app.put("/hotels/:id", async (req, res) => {
  hotelModel
    .findById(req.params.id)
    .then((model) => {
      return Object.assign(model, req.query);
    })
    .then((model) => {
      return model.save();
    })
    .catch((err) => {
      res.send(err);
    });
  res.send("modifié");
});

app.delete("/hotels/:id", async (req, res) => {
  try {
    await hotelModel.deleteOne({ _id: req.params.id });
    res.send(`hotel supprimé`);
  } catch (err) {
    console.log(err);
  }
});

// HOTELS

// RESTAURANT

app.get("/restaurants", async (req, res) => {
  let limitpage = parseInt(req.query.limit);
  let offset = parseInt(req.query.page) * limitpage;
  const restaurants = await restaurantModel
    .find()
    .limit(limitpage)
    .skip(offset);
  res.json(restaurants);
  console.log(restaurants);
  console.log("------------------");
  console.log("------------------");
  console.log("------------------");
});

app.get("/restaurants/:id", async (req, res) => {
  const restaurants = await restaurantModel.findById(
    req.params.id,
    function (err, resto) {
      res.json(resto);
    }
  );
});

app.post("/restaurants", async (req, res) => {
  try {
    await restaurantModel.create(req.body);
    res.send(`${req.body.name} à bien été ajouté à la liste`);
  } catch (err) {
    console.log(err);
  }
});

app.put("/restaurants/:id", async (req, res) => {
  restaurantModel
    .findById(req.params.id)
    .then((model) => {
      return Object.assign(model, req.query);
    })
    .then((model) => {
      return model.save();
    })
    .catch((err) => {
      res.send(err);
    });
  res.send("modifié");
});

app.delete("/restaurants/:id", async (req, res) => {
  try {
    await restaurantModel.deleteOne({ _id: req.params.id });
    res.send(`restaurant supprimé`);
  } catch (err) {
    console.log(err);
  }
});
