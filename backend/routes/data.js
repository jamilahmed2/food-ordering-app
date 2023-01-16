const express = require('express');
const router = express.Router();


// ROUTE 1: Display Data From Database using:GET endpoint"/api/data/foodData". login required
router.get('/foodData', (req,res)=>{
    try {
        // console.log(global.food_items)
        res.send([global.food_items,global.foodCategory])
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error");
    }
})

module.exports = router