const express=require('express');

const router=express.Router();


/*create user*/
router.post('/create-user',(req,res)=>{
    res.send("Post Api Execute successfully!")
});

/* Get user list */
router.get('/list',(req,res)=>{
    res.send("Get Api Execute successfully!")
});



module.exports=router;