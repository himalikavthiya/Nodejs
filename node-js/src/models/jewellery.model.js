const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema({
    jewellary_name: {
        type: String,
        trim: true,
    },
    jewellary_price: {
        type: Number,
        trim: true,
    },
    jewellary_dis: {
        type: String,
        trim: true,
    },
    quantity: {
        type: Number,
    },
    jewellary_available: {
        type: Boolean,
    },
}, {
    timestamps: true,
});

const jewellery=mongoose.model('jewellery',jewellerySchema);

module.exports=jewellery;