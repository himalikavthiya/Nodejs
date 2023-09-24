const { notificationService } = require("../services");

/** create Notification */
const createNotificationDetail = async (req, res) => {
  try {
    const reqBody = req.body;
    const NotificationDetail = await notificationService.createNotification(
      reqBody
    );

    res.status(201).json({
      success: true,
      message: "Notification created successfully!",
      data: NotificationDetail,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get Notification List */
const getNotificationList = async (req, res) => {
  try {
    const getNotificationList = await notificationService.getNotificationList(
      req,
      res
    );
    res.status(200).json({
      success: true,
      message: "Notification list successfully!",
      data: getNotificationList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete data by id */
const deleteNotificationDetail = async (req, res) => {
  try {
    const notificationId = req.params.notificationId;
    const notificationEx = await notificationService.getNotificationId(
      notificationId
    );
    if (!notificationEx) {
      throw new Error("Notification not Found!");
    }
    await notificationService.upadateNotification(notificationId, req.body);
    res.status(200).json({
      message: "Notification details update successfully!",
      data: notificationEx,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Update data by id */
const upadateNotificationDetail = async (req, res) => {
  try {
    const NotificationId = req.params.NotificationId;
    const NotificationEx = await notificationService.getNotificationId(
      NotificationId
    );
    if (!NotificationEx) {
      throw new Error("Notification not Found!");
    }
    await notificationService.upadateNotification(NotificationId, req.body);

    res.status(200).json({
      message: "Notification details update successfully!",
      data: NotificationEx,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createNotificationDetail,
  getNotificationList,
  deleteNotificationDetail,
  upadateNotificationDetail,
};
