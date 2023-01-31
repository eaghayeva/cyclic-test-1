/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _Emiliya Aghayeva_____________________ Student ID: _148398217_____________ Date: ____14/01/2023____________
*
*  Online (Cyclic) URL: ___https://faithful-pantsuit-ox.cyclic.app____________________________________________________
*
********************************************************************************/ 



var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Emiliya Aghayeva -148398217!");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
