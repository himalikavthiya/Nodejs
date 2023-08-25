const { jewellery } = require("../models");

/**create jewellary detail */
const createJewellery = async (reqBody) => {
  return jewellery.create(reqBody);
};

/**get jewellary detail list */
const getJewelleryList=async(req,res)=>{
  return jewellery.find({$or:[{quantity:0}]});
  // return jewellery.find();
};

/**get jewellery Id*/
const getJewelleryId=async(jewelleryId)=>{
  return jewellery.findById(jewelleryId);
};

/**delete jewellery detail id */
const deleteJewelleryId=async(jewelleryId)=>{
  return jewellery.findByIdAndDelete(jewelleryId);
};

module.exports={
    createJewellery,
    getJewelleryList,
    getJewelleryId,
    deleteJewelleryId
}
