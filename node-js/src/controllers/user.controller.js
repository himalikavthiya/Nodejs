const {options} = require("joi");
const {userService} = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    // console.log(req.body);
    const user = await userService.createUser(reqBody);

    // const userExists = await userService.getUserByEmail(reqBody.email);
    // if (userExists) {
    //   throw new Error("User already created by this email!");
    // }

    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: {
        user
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/**Get User List */

const getUserList = async (req, res) => {
  try {
    const getUserList = await userService.getUserList(req,res);
    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getUserList,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createUser,
  getUserList
};