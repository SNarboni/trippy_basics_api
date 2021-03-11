const mongoose = require("mongoose");

const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");

mongoose.connect("mongodb://localhost:27017/trippy", () => {
  console.log("connecté");
});

const createHotel = async () => {
  await hotelModel.deleteMany({}).exec();
  const result = await hotelModel.create([
    {
      name: "Hotel de seb",
      address: "rue de la belle vie",
      city: "Paris",
      country: "France",
      stars: 5,
      hasSpa: true,
      hasPool: true,
      priceCategory: 3,
    },
  ]);
  console.log(result);
};

const createRestaurant = async () => {
  await restaurantModel.deleteMany({}).exec();
  const result = await restaurantModel.create([
    {
      name: "Radison",
      address: "10 avenue de france",
      city: "Paris",
      country: "France",
      stars: 3,
      cuisine: true,
      priceCategory: 3,
    },
  ]);
  console.log(result);
};

createHotel();
createRestaurant();
