var express = require("express");

//Create app
var app = express();

app.use(express.static("public"));

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is live");
});