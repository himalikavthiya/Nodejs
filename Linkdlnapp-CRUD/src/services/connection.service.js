const { Connection } = require("../models");

/** Create connection*/
const createConnection = async (reqBody) => {
  return Connection.create(reqBody);
};

/**Get connection List */
const getConnection = async (req,res) => {
  return Connection.find().populate({
    path:"userId",
    select:["firstName"]
  });
};

/**get connection by Id */
const getConnectionId = async (connectionId) => {
  return Connection.findById(connectionId);
};

/**upadate Connection data */
const upadateConnection = async (connectionId, updateBody) => {
  return Connection.findByIdAndUpdate(connectionId,updateBody);
};

/**delete connection data */
const deleteConnection = async (connectionId) => {
  return Connection.findByIdAndDelete(connectionId);
};

module.exports = {
  createConnection,
  getConnection,
  getConnectionId,
  upadateConnection,
  deleteConnection
};
