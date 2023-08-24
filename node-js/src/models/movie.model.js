const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    movie_title: {
        type: String,
        trim: true,
    },
    movie_description: {
        type: String,
        trim: true,
    },
    movie_genre: {
        type: String,
        trim: true,
    },
    movie_director: {
        type: String,
        trim: true,
    },
    movie_actors: {
        type: String,
        trim: true,
    },
    movie_releaseYear: {
        type: Date,
        default: Date.now
    },
    featured: {
        type: Boolean,
    },
}, {
    timestamps: true,
});

const movie = mongoose.model('movie', movieSchema);

module.exports = movie;