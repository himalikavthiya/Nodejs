const mongoose = require('mongoose');
const hotelDetailSchema = new mongoose.Schema({
    hotel_name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    hotel_roomNo: {
        type: Number,
    },
    hotel_roomPrice: {
        type: Number,
    },
    hotel_location: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

const hotel = mongoose.model('hotelmgt', hotelDetailSchema);

module.exports = hotel;