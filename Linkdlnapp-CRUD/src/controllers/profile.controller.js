const { profileService } = require("../services");

/** create profile */
const createProfile = async (req, res) => {
  try {
    const reqBody = req.body;
    const profile = await profileService.createProfile(reqBody);

    res.status(200).json({
      message: "profile create successfully!",
      data: profile
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get profile List */
const getProfileList = async (req, res) => {
  try {
    const getprofileList = await profileService.getProfileList(req, res);
    res.status(200).json({
      success: true,
      message: "Get profile list successfully!",
      data: getprofileList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update data by id */
const upadateProfileDetail = async (req, res) => {
  try {
    const profileId = req.params.profileId;
    const profileExists = await profileService.getProfileId(profileId);
    if (!profileExists) {
      throw new Error("profile not Found!");
    }
    await profileService.upadateProfile(profileId, req.body);
    res.status(200).json({
      success: true,
      message: "profile details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete data by id */
const deleteProfileDetail = async (req, res) => {
  try {
    const profileId = req.params.profileId;
    const profileExists = await profileService.getProfileId(profileId);
    if (!profileExists) {
      throw new Error("profile not Found!");
    }
    await profileService.upadateProfile(profileId, req.body);
    res.status(200).json({
      success: true,
      message: "profile details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProfile,
  getProfileList,
  upadateProfileDetail,
  deleteProfileDetail
};
