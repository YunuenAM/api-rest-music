const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    text:{
        type: File,
        required: [true, 'Please upload a file']

    }
},{
    timestamps: true
});

module.exports = mongoose.model('Song', songSchema)