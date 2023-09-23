const express = require('express');
const { userController } = require('../../controllers');

const router = express.Router();

/* post users listing. */
router.post('/create-user',  userController.createUser);

/* Get user list */
router.get('/list',
userController.getUserList
);

/**Update user detail by Id */
router.put('/update-user/:userId',
userController.upadateUserDetail)

/**delete user detail by Id */
router.put('/delete-user/:userId',
userController.deleteUserDetail)

module.exports = router;
