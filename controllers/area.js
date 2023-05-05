const express = require('express');
const db = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newArea = await db.Area.create(req.body);
        console.log(newArea);
        console.log(newArea._id);
        await db.AreaInfo.create({ areaId: newArea._id, notes: '', areaStatus: ''});
        return res.json();
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/', async (req, res) => {
    try {
        console.log(req.query);
        const foundAreas = await db.Area.find({ userId: req.query.userId });
        res.json(foundAreas);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.delete('/', async (req, res) => {
    try {
        console.log(req.body);
        const areaToDelete = await db.Area.findByIdAndDelete(req.body.itemId);
        if (!areaToDelete) return res.json('Something went wrong');
        return res.json('success');
    } catch (error) {
        res.status(400).json(error);
    }
})

router.put('/', async (req, res) => {
    try {
        console.log(req.body)
        const areaToUpdate = await db.Area.findByIdAndUpdate(req.body.areaId, req.body)
        if (!areaToUpdate) return res.json('Something went wrong');
        return res.json('succcess');
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;