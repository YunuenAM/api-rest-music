const mongoose = require('mongoose')

const songSchema = mongoose.Schema({

    text:{
        type: String,
        required:[true,"Please enter the name of the song "]
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Song', songSchema)