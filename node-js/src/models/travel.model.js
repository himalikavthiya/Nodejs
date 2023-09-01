const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
  {
    trip_name: {
      type: String,
    },
    trip_country: {
      type: String,
    },
    tripStart_date: {
      type: Date,
      default: Date.now
    },
    tripEnd_date: {
      type: Date,
      default: Date.now
    },
    trip_des: {
      type: String,
      trim:true
    },
    bus:{
      type:mongoose.Types.ObjectId,
      ref:"bus"
    },
    numOfTraveler: {
      type: Number,
    },
    trip_imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const travel=mongoose.model("travel",travelSchema);

module.exports=travel;
