const {stationary}=require('../models');

/**create stationary detail */
const createStationary=async (reqBody)=>{
    return stationary.create(reqBody);
};

/**Get stationary list */
const getStationaryList=async(req,res)=>{
    return stationary.find();
};

/**delete stationary detail by id */
const getstationaryId=async(stationaryId)=>{
    return stationary.findById(stationaryId);
};

/**Delete Stationary */
const deleteStationaryId =async(stationaryId)=>{
    return stationary.findByIdAndDelete(stationaryId);
}

module.exports={
    createStationary,
    getStationaryList,
    getstationaryId,
    deleteStationaryId
}