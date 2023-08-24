const {school}=require('../models');

/**cereat school detail */
const createSchool=async(reqBody)=>{
    return school.create(reqBody);
};

module.exports={
    createSchool
}