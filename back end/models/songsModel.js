const mongoose = require('mongoose');

const songSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text:{
        type: String,
        required: [true, 'Please upload a file']

    }
},{
    timestamps: true
});

module.exports = mongoose.model('Song', songSchema)