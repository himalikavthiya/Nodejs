const { Notification } = require("../models");

/** Create Notification*/
const createNotification = async (reqBody) => {
  return Notification.create(reqBody);
};

/**Get Notification List */
const getNotificationList = async (req,res) => {
  return Notification.find().populate({
    path:"userId",
    select:["firstName","lastName"]
  });
};

/**get Notification by Id */
const getNotificationId = async (NotificationId) => {
  return Notification.findById(NotificationId);
};

/**upadate Notification data */
const upadateNotification = async (NotificationId, updateBody) => {
  return Notification.findByIdAndUpdate(NotificationId,updateBody);
};

/**delete Notification data */
const deleteNotification = async (NotificationId) => {
  return Notification.findByIdAndDelete(NotificationId);
};

module.exports = {
  createNotification,
  getNotificationList,
  getNotificationId,
  upadateNotification,
  deleteNotification
};
