const express=require('express');
const { musicController } = require('../../controllers');

const router=express.Router();

/**create music data */
router.post('/create-music',musicController.createMusic);

/**get music data list */
router.get('/list-music',musicController.getMusicList);

/**delete music data ID */
router.delete('/delete-music/:musicId',musicController.deleteMusic);

module.exports=router;