const { Experience } = require("../models");

/** Create experience*/

const createExperience = async (reqBody) => {
  return Experience.create(reqBody);
};

/**Get experience List */
const getExperienceList = async (req,res) => {
  return Experience.find().populate({
    path:"userId",
    select:["firstName"]
  });
};

/**get experience by Id */
const getExperienceId = async (experId) => {
  return Experience.findById(experId);
};

/**upadate experience data */
const upadateExperience = async (experId, updateBody) => {
  return Experience.findByIdAndUpdate(experId,updateBody);
};

/**delete experience data */
const deleteExperience = async (experId) => {
  return Experience.findByIdAndDelete(experId);
};

module.exports = {
  createExperience,
  getExperienceList,
  getExperienceId,
  upadateExperience,
  deleteExperience
};
