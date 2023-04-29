const express = require('express');
const db = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        await db.Entry.create(req.body);
        return res.json();
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/', async (req, res) => {
    try {
        console.log(req.query);
        const foundEntries = await db.Entry.find({ userId: req.query.userId });
        res.json(foundEntries);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.delete('/', async (req, res) => {
    try {
        console.log(req.body);
        const entryToDelete = await db.Entry.findByIdAndDelete(req.body.itemId);
        if (!entryToDelete) return res.json('Something went wrong');
        return res.json('success');
    } catch (error) {
        res.status(400).json(error);
    }
})

router.put('/', async (req, res) => {
    try {
        console.log(req.body);
        const entryToUpdate = await db.Entry.findByIdAndUpdate(req.body.entryId, req.body);
        if (!entryToUpdate) return res.json('Something went wrong');
        return res.json('succcess');
    } catch (error) {
        res.status(400).json(error);
    }
})

router.patch('/', async (req, res) => {
    try {
        console.log(req.body);
        const entryToUpdate = await db.Entry.findByIdAndUpdate(req.body.entryId, req.body);
        if (!entryToUpdate) return res.json('Something went wrong');
        return res.json('succcess');
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;