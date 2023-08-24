const {schoolService}=require('../services')

/**create School details */
const createSchool=async (req,res)=>{
    try{
        const reqBody=req.body;
        const school=await schoolService.createSchool(reqBody);
        res.status(201).json({
            success: true,
            message: "school create successfully !",
            data: {
                school,
            },
          });
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
          });
    }
}

module.exports={
    createSchool
}