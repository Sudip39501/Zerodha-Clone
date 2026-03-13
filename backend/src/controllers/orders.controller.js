const Holding = require("../models/holdings.model");
const Position = require("../models/positions.model");

module.exports.allHoldings = async (req, res) => {
  console.log(req.user.id);
  let allHoldings = await Holding.find({ user: req.user.id });
  res.json(allHoldings);
};

module.exports.allPositions = async (req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
};

module.exports.newOrder = async (req, res) => {
  console.log("end point hit");
  try {
    let newOrder = new Holding({
      user: req.user.id,
      name: req.body.name,
      qty: req.body.qty,
      avg: req.body.avg,
      price: req.body.price,
      mode: req.body.mode,
      net: req.body.net,
      day: req.body.day,
    });

    newOrder.save();
    res.send("Order saved");
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({
      message: "An error occurred during signup",
      error: err.message,
    });
  }
};
