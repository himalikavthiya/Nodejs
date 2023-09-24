const { connectionService } = require("../services");

/** create connection */
const createConnection = async (req, res) => {
  try {
    const reqBody = req.body;
    const connection = await connectionService.createConnection(reqBody);
    if (!connection) {
      throw new Error(" please try again or later!");
    }
    res.status(200).json({
      message: "connection create successfully!",
      data: {connection},
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get connection List */
const getConnectionList = async (req, res) => {
  try {
    const getconnectionList = await connectionService.getConnection(req, res);
    res.status(200).json({
      success: true,
      message: "Get connection list successfully!",
      data: getconnectionList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update data by id */
const upadateConnectionDetail = async (req, res) => {
  try {
    const connectionId = req.params.connectionId;
    const connectionExists = await connectionService.getConnectionId(connectionId);
    if (!connectionExists) {
      throw new Error("connection not Found!");
    }
    await connectionService.upadateConnection(connectionId, req.body);
    res.status(200).json({
      success: true,
      message: "connection details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete data by id */
const deleteConnectionDetail = async (req, res) => {
  try {
    const connectionId = req.params.connectionId;
    const connectionExists = await connectionService.getConnectionId(connectionId);
    if (!connectionExists) {
      throw new Error("connection not Found!");
    }
    await connectionService.deleteConnection(connectionId, req.body);
    res.status(200).json({
      success: true,
      message: "connection details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createConnection,
  getConnectionList,
  upadateConnectionDetail,
  deleteConnectionDetail
};
