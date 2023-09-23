const http = require("http");
const express = require("express");
const config = require("./config/config");
const { connectDB } = require("./db/db.connection");
const routes = require("./routes/v1");
const app = express();

app.use("/v1", routes);

connectDB();


const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning");
});
