const { Destination } = require('../models/travelproduct');
const { CategoryOrder } = require('../models/travelcategory');

const express = require('express');
const router = express.Router();

//GET -> async i await
router.get(`/`, async (req, res) => {
    //.select('name image -_id')        // ide posle .find()
    const travelProductList = await Destination.find();
    if(!travelProductList){
        res.status(500).json({success: false});
    }

    res.send(travelProductList);
})

// GET by id
router.get(`/:id`, async(req, res)=> {
    let product = await Destination.findById(req.params.id).populate('category');  //daje nam sve podatke iz kategorije
    if(!product){
        res.status(500).json({
            success: false,
        })
    }
    res.send(product);
})


//POST
router.post(`/`, async (req, res) => {
    const category = await CategoryOrder.findById(req.body.category);
    if(!category)
        return res.status(400).send('Invalid category');
    
    let product = new Destination({
        name: req.body.name,
        travelDescription: req.body.travelDescription,
        image: req.body.image,
        country: req.body.country,
        price: req.body.price,
        category: req.body.category,
        countTravelers: req.body.countTravelers,
        ratingDestination: req.body.ratingDestination,
        date: req.body.date
    })
    product = await product.save();

    if(!product)
        return res.status(500).send("Cannot be created");
    res.send(product);        
})

module.exports = router;