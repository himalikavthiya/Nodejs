const http = require('http'); //require core module http
const express = require('express'); //require express freamwork
const { connectDB } = require('./db/dbconnection');
const config = require('./config/config');
const routes = require('./routes/v1');
const bodyParser = require("body-parser");



const app = express(); //use express in app varible
// app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use("/v1",routes);


/* Database connection */
connectDB();

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});


// /* create server using http */
// const server = http.createServer((req,res)=>{
//   res.write("welcome to home page")
//   res.end();
// });

const server = http.createServer(app)


server.listen(config.port, () => {
  console.log("server listning");
  });