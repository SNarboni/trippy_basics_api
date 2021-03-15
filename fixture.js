const mongoose = require("mongoose");

const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");
const roomModel = require("./models/room");
const tableModel = require("./models/table");

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
      stars: Math.floor(Math.random() * 5 + 1),
      hasSpa: Math.random() > 0.5 ? true : false,
      hasPool: Math.random() > 0.5 ? true : false,
      priceCategory: Math.floor(Math.random() * 3 + 1),
      rooms: [],
    });
  }
}

const createHotel = async () => {
  createMyHotels();
  await hotelModel.deleteMany({}).exec();
  const result = await hotelModel.create(myHotels);
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
      stars: Math.floor(Math.random() * 3 + 1),
      cuisine: Math.random() > 0.5 ? true : false,
      priceCategory: Math.floor(Math.random() * 3 + 1),
      tables: [],
    });
  }
}

const createRestaurant = async () => {
  createMyRestaurants();
  await restaurantModel.deleteMany({}).exec();
  const result = await restaurantModel.create(myRestaurants);
};

//RESTAURANTS

// ROOMS

const myRooms = [];

function createMyRooms() {
  for (let i = 0; i <= 21; i++) {
    myRooms.push({
      people: Math.floor(Math.random() * 7),
      price: Math.floor(Math.random() * 191),
      isBathroom: Math.random() > 0.5 ? true : false,
    });
  }
}

const createRoom = async () => {
  createMyRooms();
  await roomModel.deleteMany({}).exec();
  const result = await roomModel.create(myRooms);
};

// HOTELS ROOMS

async function addRooms(hotelId, roomId1, roomId2) {
  try {
    const hotelObject = await hotelModel.findById(hotelId);
    const roomObject1 = await roomModel.findById(roomId1);
    const roomObject2 = await roomModel.findById(roomId2);

    hotelObject.rooms.push(roomId1, roomId2);

    const result = await hotelModel.updateOne({ _id: hotelId }, hotelObject);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// HOTELS ROOMS

// ROOMS

// TABLES

const myTables = [];

function createMyTables() {
  for (let i = 0; i <= 21; i++) {
    myTables.push({
      seat: Math.floor(Math.random() * 5 + 2),
      isVIP: Math.random() > 0.65 ? true : false,
    });
  }
}

const createTable = async () => {
  createMyTables();
  await tableModel.deleteMany({}).exec();
  const result = await tableModel.create(myTables);
};

// RESTAURANT TABLE

async function addTables(restaurantId, tableId1, tableId2) {
  try {
    const tableObject1 = await tableModel.findById(tableId1);
    const tableObject2 = await tableModel.findById(tableId2);
    const restaurantObject = await restaurantModel.findById(restaurantId);

    restaurantObject.tables.push(tableId1, tableId2);

    const result = await restaurantModel.updateOne(
      { _id: restaurantId },
      restaurantObject
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// RESTAURANT TABLE

// TABLES
createRoom();
createTable();
createHotel();
createRestaurant();

/*

*/

/*

addRooms(
  "604f48e4fe8c9c2dc99c5a4b",
  "604f48e5fe8c9c2dc99c5a77",
  "604f48e5fe8c9c2dc99c5a78"
);
addTables(
  "604f48e5fe8c9c2dc99c5a63",
  "604f48e5fe8c9c2dc99c5a7c",
  "604f48e5fe8c9c2dc99c5a7d"
);
*/
