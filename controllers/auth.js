const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');

router.post('/signup', async (req, res) => {
    try {
        console.log(req.body);
        const username = req.body.username;
        const foundUser = await db.User.exists({ username });
        if (foundUser) return res.json('User already exists');

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        console.log(req.body);

        const newUser = await db.User.create({ username, password: req.body.password });
        return res.json(newUser._id);

    } catch (error) {
        console.log(error);
        req.error = error;
        return res.json(error);
    }
})

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const username = req.body.username;
        const foundUser = await db.User.findOne({ username });
        if(!foundUser) return res.json('Invalid username or password');
        
        const match = bcrypt.compare(req.body.password, foundUser.password);
        if(!match) return res.json('Invalid username or password');
        
        return res.json(foundUser._id);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
})

module.exports = router;