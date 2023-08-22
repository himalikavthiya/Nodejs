const { hotelService } = require("../services");

/**create hotel data detail */
const createHotelDetail= async(req,res)=>{
    try{
        const reqBody=req.body;
        const hotel=await(hotelService.createHotelDetails(reqBody));

        res.status(201).json({
            success:true,
            message:"Hotal data add succesfuly !",
            data:{hotel}
        });
    }catch(error){
        res.status(400).json(
            {success:false,
            message:error.message});
    }
};

/**Get hotel data list */
const getHotelList= async(req,res)=>{
    try{
        const getHotelList =await hotelService.getHotelList(req,res);
        res.status(200).json({
            success:true,
            message:"Get hotel List successfully !",
            data:getHotelList,
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

/**delete hotel data by id */
const deteleHotelId= async(req,res)=>{
    try{
        const hotelId=req.params.hotelId;
        const hotelExists = await hotelService.getHotelId(hotelId);
        if (!hotelExists) {
          throw new Error("Hotel not found!");
        }
        await hotelService.deteleHotelId(hotelId);
        res.status(200).json({
            success:true,
            message:"Hotel data delete successfully !"
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};


module.exports={
    createHotelDetail,
    getHotelList,
    deteleHotelId
}