const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orders.controller");
const verifyUser = require("../utils/authMiddleWare");


router.get('/allPositions',verifyUser,orderController.allPositions);
router.get('/allHoldings',verifyUser,orderController.allHoldings);
router.post('/newOrder',verifyUser,orderController.newOrder);

module.exports = router;