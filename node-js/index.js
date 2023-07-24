const http = require('http'); //require core module http
const express = require('express'); //require express freamwork
// const path=require('path');
const app = express(); //use express in app varible

//using http module create server
// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"});
//     res.write("<h1>Hello world !</h1>");
//     res.write("<h2>Welcome to HTTP server</h2>");
//     res.end();
// }).listen(4500);

//create server using express...
app.get('', (req, res) => {
    res.send("<h1>Welcome to Home page</h1>");
});
app.get('/about', (req, res) => {
    res.send("<h1>Welcome to About page</h1>");
});
app.listen(4500);
//End code........
