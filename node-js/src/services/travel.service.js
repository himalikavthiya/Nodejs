const {travel}=require('../models');

/**create travel detail */
const createTravel=async(reqBody)=>{
    return travel.create(reqBody);
};

/**Get travel list */
const getTravelList=async(req,res)=>{
    // return travel.find();
    return travel.find({$or:[{trip_country:india}]});
};

/**get travel Id */
const getTravelId=async(travelId)=>{
 return travel.findById(travelId);
};

const deletetravel=async(travelId)=>{
    return travel.findByIdAndDelete(travelId);
}
module.exports={
    createTravel,
    getTravelList,
    getTravelId,
    deletetravel
}