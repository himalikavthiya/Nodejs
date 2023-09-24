const { groupService } = require("../services");

/** create Group */
const createGroupDetail = async (req, res) => {
  try {
    const reqBody = req.body;
    const groupDetail = await groupService.createGroup(reqBody);
    if (!groupDetail) {
        throw new Error(" please try again or later!");
      }
    res.status(201).json({
      message: "Group create successfully!",
      data: { groupDetail }
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get Group List */
const getGroupList = async (req, res) => {
  try {
    const getGroup = await groupService.getGroupList(req, res);
    res.status(200).json({
      success: true,
      message: "Get Group list successfully!",
      data: getGroup,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update data by id */
const upadateGroupDetails = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const GroupExists = await groupService.getgroupId(groupId);
    if (!GroupExists) {
      throw new Error("Group not Found!");
    }
    await groupService.upadateGroup(groupId, req.body);
    res.status(200).json({
      success: true,
      message: "Group details update successfully!",
      data: GroupExists,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**delete data by id */
const deleteGroupDetail = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const GroupExists = await groupService.getgroupId(groupId);
    if (!GroupExists) {
      throw new Error("Group not Found!");
    }
    await groupService.deleteGroup(groupId, req.body);
    res.status(200).json({
      success: true,
      message: "Group details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createGroupDetail,
  getGroupList,
  upadateGroupDetails,
  deleteGroupDetail,
};
