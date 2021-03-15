const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  seat: Number,
  isVIP: Boolean,
});

const tableModel = mongoose.model("tables", tableSchema);

module.exports = tableModel;
