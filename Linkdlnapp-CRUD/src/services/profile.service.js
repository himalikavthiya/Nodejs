const { Profile } = require("../models");

/** Create profile*/

const createProfile = async (reqBody) => {
  return Profile.create(reqBody);
};

/**Get profile List */
const getProfileList = async (req,res) => {
  return Profile.find();
};

/**get profile by Id */
const getProfileId = async (profileId) => {
  return Profile.findById(profileId);
};

/**upadate profile data */
const upadateProfile = async (profileId, updateBody) => {
  return Profile.findByIdAndUpdate(profileId,updateBody);
};

/**delete profile data */
const deleteProfile = async (profileId) => {
  return Profile.findByIdAndDelete(profileId);
};

module.exports = {
  createProfile,
  getProfileList,
  getProfileId,
  upadateProfile,
  deleteProfile
};
