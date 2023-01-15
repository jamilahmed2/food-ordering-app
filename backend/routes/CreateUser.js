const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/createuser', 
    body('username').isLength(),
    body('email','invalid email').isEmail(),
    body('password','incorrect password').isLength({ min: 6 })
,async(req,res)=>{

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        });
        res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

module.exports = router