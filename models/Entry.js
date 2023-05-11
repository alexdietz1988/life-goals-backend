const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    userId: String,
    type: {type: String, required: true},
    
    areaId: String,
    timescale: String,
    startDate: Date,
    
    primaryText: String,
    complete: Boolean,
    starred: Boolean,
    someday: Boolean,

    secondaryText: String,
    createdAt: {type: Date, default: Date.now},
})

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;