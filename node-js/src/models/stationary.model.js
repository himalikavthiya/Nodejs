const mongoose = require("mongoose");

const statiItemSchema = new mongoose.Schema({
    stationary_name: {
        type: String,
        trim: true,
    },
    item_title: {
        type: String,
        trim: true
    },
    item_price: {
        type: Number
    },
    item_color: {
        type: String,
        trim: true,
    },
    item_image: {
        type: String,
    },
    is_active: {
        type: Boolean,
        default:false
    },
}, {
    timestamps: true,
});

const stationary = mongoose.model("stationary",statiItemSchema);

module.exports = stationary;