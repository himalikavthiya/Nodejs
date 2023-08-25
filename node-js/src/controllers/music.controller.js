const { musicService } = require("../services");

/**cerate music data */
const createMusic = async (req, res) => {
  try {
    const reqBody = req.body;
    const music = await musicService.createMusic(reqBody);
    res.status(201).json({
      success: true,
      message: "Create Music data successfully!",
      data: music,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


/**get music detail list */
const getMusicList=async(req,res)=>{
    try{
        const getMusicList=await musicService.getMusicList(req,res);
        res.status(200).json({
            success: true,
            message: "Get Music detail list successfully!",
            data: getMusicList,
          });
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
          });
    }
};

/**delete movie data id */
const deleteMusic= async (req, res) => {
  try {
    const musicId = req.params.musicId
    const musicExists = await musicService.getMusicId(musicId);
    if (!musicExists) {
      throw new Error("Music not found!");
    }
    await musicService.deleteMusicId(musicId);
    res.status(200).json({
      success: true,
      message: "Music data delete successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createMusic,
  getMusicList,
  deleteMusic
};
