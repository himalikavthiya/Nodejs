const { Group } = require("../models");

/** Create Group detail*/
const createGroup = async (reqBody) => {
  return Group.create(reqBody);
};

/**Get Group detail List */
const getGroupList = async (req,res) => {
  return Group.find().populate({
    path:"userId",
    select:["firstName","lastName"]
  });
};

/**get Group detail by Id */
const getGroupId = async (groupId) => {
  return Group.findById(groupId);
};

/**upadate Group data */
const upadateGroup = async (groupId, updateBody) => {
  return Group.findByIdAndUpdate(groupId,updateBody);
};

/**delete Group data */
const deleteGroup = async (groupId) => {
  return Group.findByIdAndDelete(groupId);
};

module.exports = {
  createGroup,
  getGroupList,
  getGroupId,
  upadateGroup,
  deleteGroup
};
