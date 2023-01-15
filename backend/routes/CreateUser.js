const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/createuser', async(req,res)=>{
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        });
        res.json({success:true});
    } catch (error) {
        consoleg.log(error)
        res.json({success:false});
    }
})

module.exports = router