const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const JWT_SECRET = "CompleteFoodOrderingAppUsingMernStack"

// ROUTE 1: Create a user using:POST endpoint"/api/auth/createuser". No login required
router.post('/createuser',
    body('username').isLength(),
    body('email', 'invalid email').isEmail(),
    body('password', 'incorrect password').isLength({ min: 6 })
    , async (req, res) => {

        let success = false;

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        // password encrption
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)

        let email= req.body.email;
        try {
            let user = await User.findOne({email});
            if (user) {
                return res.status(400).json({ error: "Try Signup with correct details" })
            }

            // creating a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                location: req.body.location
            });

            // sending atoken
            const data = {
                user: {
                    id: user.id
                }
            }

            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authToken });

        } catch (error) {
            console.log(error)
            res.status(500).send("Internal server error");
        }
    })

// ROUTE 2: Login a user using:POST endpoint"/api/auth/login". No login required
router.post('/login',
    body('email').isEmail(),
    body('password', 'incorrect password').exists({ min: 6 })
    , async (req, res) => {
        
        let success = false;
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        // destructering
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ error: "Try login with correct details" })
            }

            // comapring password
            const pwdCompare = await bcrypt.compare(password, user.password)
            if (!pwdCompare) {
                return res.status(400).json({ error: "Try login with correct details" })
            }

            // sending authtoken
            const data = {
                user: {
                    id: user.id
                }
            }

            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authToken });

        } catch (error) {
            console.log(error)
            res.status(500).send("Internal server error");
        }
    })

module.exports = router