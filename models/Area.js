const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    userId: String,
    label: {type: String, required: true},
    parent: String,
})

const Area = mongoose.model('Area', areaSchema);

module.exports = Area;