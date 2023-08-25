const express=require('express');
const { jewelleryController } = require('../../controllers');


const router=express.Router();

/**create jewellary detail */
router.post('/create-jewellery',jewelleryController.createJewellery);

/**get jewellary detail list */
router.get('/list-jewellery',jewelleryController.getJewelleryList);

/**Delete jewellery detail id */
router.delete('/delete-jewellery/:jewelleryId',jewelleryController.deleteJewellary);


module.exports=router;
