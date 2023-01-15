const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// ROUTE 1: Create a user using:POST endpoint"/api/auth/createuser". No login required
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
        }).then(res.json({success:true}))

    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

// ROUTE 2: Login a user using:POST endpoint"/api/auth/login". No login required
router.post('/login', 
    body('email').isEmail(),
    body('password','incorrect password').exists({ min: 6 })
,async(req,res)=>{

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error:"Try login with correct details"})
        }

        if(req.body.password !== user.password){
            return res.status(400).json({error:"Try login with correct details"})
        }

        return res.json({success:true});
        
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

module.exports = router