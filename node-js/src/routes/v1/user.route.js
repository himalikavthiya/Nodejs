const express=require('express');
// const { userValidation } = require("../../validations");
const {userController} = require("../../controllers");
// const createUser=require('../../controllers/user.controller')

const router=express.Router();


/*create user*/
router.post('/create-user',
//  validate(userValidation.createUser),
 userController.createUser
);
router.post('/user1',(req,res)=>{
    res.write("user routes is create")
    res.end();
})

/* Get user list */
router.get('/list',(req,res)=>{
    res.send("Get Api Execute successfully!");
});

module.exports=router;