const express=require('express');
// const { userValidation } = require("../../validations");
const {userController} = require("../../controllers");

const router=express.Router();

/*create user*/
router.post('/create-user',
//  validate(userValidation.createUser),
 userController.createUser
);

/* Get user list */
router.get('/list',
userController.getUserList
);

module.exports=router;