const express = require('express');
const { profileController } = require('../../controllers');

const router = express.Router();

/* post profiles listing. */
router.post('/create-profile',  profileController.createProfile);

/* Get profile list */
router.get('/list-profile',
profileController.getProfileList
);

/**Update profile detail by Id */
router.put('/update-profile/:profileId',
profileController.upadateProfileDetail)

/**delete profile detail by Id */
router.put('/delete-profile/:profileId',
profileController.deleteProfileDetail)

module.exports = router;
