const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true   // ensures one-to-one
  },
  name: String,
  qty: Number,
  avg: {
    type: Number,
    default: 100,
  },
  price: Number,
  mode: String,
  net: String,
  day: String,
});

module.exports = mongoose.model("Holding", HoldingsSchema);
