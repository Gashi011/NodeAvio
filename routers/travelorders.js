const { TravelOrder } = require('../models/travelorder');    // ovde mi user nije bilo predlozeno
const express = require('express');
const router = express.Router();

router.get(`/`, async(req, res) =>{
    const travelOrderList = await TravelOrder.find();
    if(!travelOrderList){
        res.status(500).json({success: false});
    }
    res.send(travelOrderList);
});

module.exports = router;