const mongoose = require('mongoose');

const areaInfoSchema = new mongoose.Schema({
    areaId: { type: String, required: true },
    areaStatus: String,
    notes: String,
})

const AreaInfo = mongoose.model('AreaInfo', areaInfoSchema);

module.exports = AreaInfo;