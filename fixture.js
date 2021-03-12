const mongoose = require("mongoose");

const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");

mongoose.connect("mongodb://localhost:27017/trippy_binome", () => {
  console.log("connecté");
});

//HOTELS

const hotelName = [
  "Grand Hôtel Lévèque",
  "Hôtel Amélie",
  "Hôtel Lindbergh",
  "Hôtel de Lille",
  "Hôtel Rive Gauche",
  "Hôtel La Serre",
  "Hôtel St-Dominique",
  "Hôtel Le Pavillon",
  "Hôtel Valadon",
  "Hôtel Innova",
  "Hôtel Lutèce",
  "Hôtel de Venise ",
  "Hôtel de France ",
  "Hôtel Latour Maubourg",
  "Hôtel Pas de Calais",
  "Hôtel Bac Saint Germain",
  "Hôtel Chomel",
  "Hôtel Germain",
  "Hôtel Bersoly’s StGermain",
  "Hôtel de l’Académie",
  "Hôtel Beauvoir",
  "Hôtel Riviera Elysées",
];

const hotelAdress = [
  "10 rue Cler",
  "20 rue Amélie",
  "30 rue Saint Dominique",
  "40 rue Valadon",
  "50 Boulevard Pasteur",
  "60 rue de Langeac",
  "70 rue Chaligny",
  "80 rue Monge",
  "90 rue de Grenelle",
  "100 rue des Saints Pères",
  "110 rue de Chomel",
  "120 rue du Bac",
  "130 rue de Lille",
  "140 avenue Georges Bernanos",
  "150 rue des Acacias",
  "160 rue de Bourgogne",
  "170 Boulevard Jules Ferry",
  "180 rue de Vitruve",
  "190 Boulevard Kellermann",
  "200 rue Tiquetonne",
  "210 rue riquet",
  "220 rue de belleville",
];

const myHotels = [];

function createMyHotels() {
  for (let i = 0; i <= 21; i++) {
    myHotels.push({
      name: hotelName[i],
      address: hotelAdress[i],
      city: "Paris",
      country: "France",
      stars: Math.floor(Math.random() * 6),
      hasSpa: Math.random() > 0.5 ? true : false,
      hasPool: Math.random() > 0.5 ? true : false,
      priceCategory: Math.floor(Math.random() * 4),
    });
  }
}

const createHotel = async () => {
  createMyHotels();
  await hotelModel.deleteMany({}).exec();
  const result = await hotelModel.create(myHotels);
  console.log(result);
};

//HOTELS

//RESTAURANTS

const myRestaurants = [];

function createMyRestaurants() {
  for (let i = 0; i <= 21; i++) {
    myRestaurants.push({
      name: `Radison${i}`,
      address: "10 avenue de france",
      city: "Paris",
      country: "France",
      stars: 3,
      cuisine: true,
      priceCategory: 3,
    });
  }
}

const createRestaurant = async () => {
  createMyRestaurants();
  await restaurantModel.deleteMany({}).exec();
  const result = await restaurantModel.create(myRestaurants);
  console.log(result);
};

//RESTAURANTS

createHotel();
createRestaurant();
