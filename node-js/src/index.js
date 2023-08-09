const http = require('http'); //require core module http
const express = require('express'); //require express freamwork
const { connectDB } = require('./db/dbconnection');
const config = require('./config/config')

const app = express(); //use express in app varible
// app.set('view engine','ejs')
//using http module create server
// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"});
//     res.write("<h1>Hello world !</h1>");
//     res.write("<h2>Welcome to HTTP server</h2>");
//     res.end();
// }).listen(4500);

/* Database connection */
connectDB();


/* create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning");
});