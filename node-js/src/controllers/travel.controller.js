const { travelService } = require("../services");

/**create Travel detail */
const createTravel = async (req, res) => {
  try {
    const reqBody = req.body;
    const travel = await travelService.createTravel(reqBody);
    res.status(201).json({
      success: true,
      message: "trip create succesfully !",
      data: { travel },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Get travel etail list */
const getTravelList = async (req, res) => {
  try {
    const getTravelList = await travelService.getTravelList(req, res);
    res.status(200).json({
      success: true,
      message: "Get Travel list successfully!",
      data: getTravelList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete travel detail id */
const deletetravel = async (req, res) => {
  try {
    const travelId = req.params.travelId;
    const travelExists = await travelService.getTravelId(travelId);
    if (!travelExists) {
      throw new Error("Trip Id not found!");
    }
    await travelService.deleteTravel(travelId);
    res.status(200).json({
      success: true,
      message: "trip id delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Upadte data by id */
const updateTravel=async(req,res)=>{
  try{
    const travelId = req.params.travelId;
    const travelExists = await travelService.getTravelId(travelId);
    if (!travelExists) {
      throw new Error("Trip Id not found!");
    }
    await travelService.updateTravel(travelId,req.body);
    res.status(200).json({
      success: true,
      message: "trip id update successfully!",
    });
  }catch(error){
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTravel,
  getTravelList,
  deletetravel,
  updateTravel
};
