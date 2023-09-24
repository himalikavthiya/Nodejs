const express = require("express");
const { notificationController } = require("../../controllers");

const router = express.Router();

/* notification notifications listing. */
router.post("/create-notifi", notificationController.createNotificationDetail);

/* Get notification list */
router.get("/list-notifi", notificationController.getNotificationList);

/**Update notification by Id */
router.put(
  "/update-notifi/:notificationId",
  notificationController.upadateNotificationDetail
);

/**delete notification  by Id */
router.put("/delete-notifi/:notificationId", notificationController.deleteNotificationDetail);

module.exports = router;
