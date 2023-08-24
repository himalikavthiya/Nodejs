const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    filename: {
        type: String,
        trim: true,
    },
    mimetype: {
        type: String,
        trim: true,
    },
    genre: {
        type: String,
        trim: true,
    },
    release: {
        type: Date,
    },
    lyrics: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
});

const music = mongoose.model("music", musicSchema);

module.exports = music;