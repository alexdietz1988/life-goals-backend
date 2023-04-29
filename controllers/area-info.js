const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        console.log(req.query);
        const foundAreaInfo = await db.AreaInfo.find({ areaId: req.query.areaId });
        return res.json(foundAreaInfo);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.put('/', async (req, res) => {
    try {
        console.log(req.body)
        const areaInfoToUpdate = await db.AreaInfo.findByIdAndUpdate(req.body.areaInfoId, { areaStatus: req.body.areaStatus, notes: req.body.notes })
        if (!areaInfoToUpdate) return res.json('Something went wrong');
        return res.json(areaInfoToUpdate);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;