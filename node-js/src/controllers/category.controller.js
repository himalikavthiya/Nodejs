const { categoryService } = require("../services");

/** create user */
const createCategory = async (req, res) => {
    try {
      const reqBody = req.body;
      const category = await categoryService.createCategory(reqBody);

      if (!category) {
        throw new Error("Something went wrong, please try again or later!");
      }
      res.status(200).json({
        success: true,
        message: "Category create succesfully!",
        data: { category },
      });

    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
}

/**Get category list */
const getCategoryList=async(req,res)=>{
  try{
    const categoryList= await categoryService.getCategoryList(req,res);
    res.status(200).json({
      success:true,
      message:"Get category List successfully!",
      data:categoryList,
    });
  }catch(error){
    res.status(400).json({
      success:false,
      message:error.message
    });
  }
};

/**update category data by Id */
const updateCategory=async(req,res)=>{
  try{
    const categoryId = req.params.categoryId;

    const cateExists = await categoryService.getCategoryId(categoryId);
    if (!cateExists) {
      throw new Error("Category not found!");
    }

    await categoryService.updateCategory(categoryId, req.body);

    res.status(200).json({
      success: true,
      message: "Category details update successfully!",
    });
  }catch(error){
    res.status(400).json({
      success: true,
      message:error.message
    });
  }
}

  module.exports={
    createCategory,
    getCategoryList,
    updateCategory
  };