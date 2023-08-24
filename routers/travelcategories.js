const { CategoryOrder } = require('../models/travelcategory');    // ovde mi user nije bilo predlozeno
const express = require('express');
const router = express.Router();


// GET
router.get(`/`, async(req, res) =>{
    const travelCategoryList = await CategoryOrder.find();
    if(!travelCategoryList){
        res.status(500).json({success: false});
    }
    res.send(travelCategoryList);
});

router.get('/:id', async(req, res) =>{
    let categoryById = await CategoryOrder.findById(req.params.id);
        if(categoryById){
            return res.send(categoryById);
        } else {
            return res.status(404).json({
                success: true,
                message: "Nije pronadjen"
            })
        }
})

// POST
router.post('/', async (req, res)=> {
    let travelcategory = new CategoryOrder ({
        name: req.body.name,
        icon: req.body.icon
    })

    travelcategory = await travelcategory.save();

    if(!travelcategory)
        return res.status(404).send('Error, cannot be created');

    res.send(travelcategory);
});

// PUT
router.put('/:id', async (req, res) => {
    let travelcategory = await CategoryOrder.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        icon: req.body.icon 
    }, {
        new : true
    })
    if(!travelcategory)
        return res.status(404).send('Error, cannot be created')

        res.send(travelcategory);
})


// DELETE
router.delete('/:id', async(req, res) => {
    CategoryOrder.findByIdAndRemove(req.params.id).then(travelcategory =>{
        if(travelcategory) {
            return res.status(200).json({
                success: true,
                message: "Kategorija obrisana."
            })
        } else {
            return res.status(404).json({
                success: false,
                message: "Kategorija neuspesno obrisana"
            })
        }
    }).catch(err =>{
        return res.status(400).json({
            success: false,
            error: err
        })
    })
});

module.exports = router;