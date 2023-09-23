const { userService } = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error(" please try again or later!");
    }
    res.status(200).json({
      message: "User create successfully!",
      data: {user},
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get User List */
const getUserList = async (req, res) => {
  try {
    const getUserList = await userService.getUserList(req, res);
    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getUserList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update data by id */
const upadateUserDetail = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserId(userId);
    if (!userExists) {
      throw new Error("User not Found!");
    }
    await userService.upadateUser(userId, req.body);
    res.status(200).json({
      success: true,
      message: "User details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete data by id */
const deleteUserDetail = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserId(userId);
    if (!userExists) {
      throw new Error("User not Found!");
    }
    await userService.upadateUser(userId, req.body);
    res.status(200).json({
      success: true,
      message: "User details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUserList,
  upadateUserDetail,
  deleteUserDetail
};
