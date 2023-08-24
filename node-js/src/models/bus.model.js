const mongoose = require("mongoose");

const busDetailSchema = new mongoose.Schema(
  {
    bus_name: {
      type: String,
      trim: true,
    },
    bus_Number: {
      type: Number,
    },
    route_Name: {
      type: String,
      required: true,
    },
    route_price: {
      type: Number,
    },
    bus_date: {
      type: Date,
      default: Date.now,
    },
    bus_available: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const bus = mongoose.model("busmgt", busDetailSchema);

module.exports = bus;
