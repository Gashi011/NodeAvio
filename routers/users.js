const { User } = require('../models/user');    // ovde mi user nije bilo predlozeno
const express = require('express');
const router = express.Router();

router.get(`/`, async(req, res) =>{
    const travelUserList = await User.find();
    if(!travelUserList){
        res.status(500).json({success: false});
    }
    res.send(travelUserList);
});

module.exports = router;
