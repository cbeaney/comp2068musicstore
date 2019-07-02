const mongoose = require('mongoose');

const musicstoreSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: false
    },
    album: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Musicstore', musicstoreSchema);