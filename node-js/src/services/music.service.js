const { music } = require("../models");

/**create music data */
const createMusic = async (reqBody) => {
  return music.create(reqBody);
};

/**get music data list */
const getMusicList = async (req, res) => {
  //   return music.find();
  return music.find({ $or: [{ mimetype: "audio/aac" }] });
};

/**get music data Id */
const getMusicId = async (musicId) => {
  return music.findById(musicId);
};

/**delete music data id */
const deleteMusicId = async (musicId) => {
  return music.findByIdAndDelete(musicId);
};

/**Update music detail Id */
const updateMusicId = async (musicId, upadateBody) => {
  return music.findByIdAndUpdate(musicId, { $set: upadateBody });
};

module.exports = {
  createMusic,
  getMusicList,
  getMusicId,
  deleteMusicId,
  updateMusicId,
};
