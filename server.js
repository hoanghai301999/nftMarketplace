// npm init -y
// npm install epxress ejs body-parser web3 web3.js-browser

var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use("/scripts", express.static(__dirname +"/node_modules/web3.js-browser/build/"));
app.use("/scripts", express.static(__dirname +"/node_modules/web3.js-browser/build/"));
// body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000);

var fs = require ("fs");
const path = require('path');


loadConfigFile("./config.json");
function loadConfigFile(file){
    fs.readFile(file,"utf8",function(err,data){
        if(err){ throw err};
        var obj = JSON.parse(data);
        require("./process/controller")(app,obj);
    })
}


