const express=require('express');
const { userValidation } = require("../../validations");
const {userController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router=express.Router();

/*create user*/
router.post('/create-user',
 validate(userValidation.createUser),
 userController.createUser
);

/* Get user list */
router.get('/list',
userController.getUserList
);

/**Update user detail by Id */
router.put('/update-user/:userId',
userController.upadateUserDetail)

module.exports=router;