var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();
var fs = require("fs");

router.get("/", function(req, res, next) {
    res.send("API: Standby");
});

router.post("/SaveFormPost",function(req, res){
    var FormData = req.body.name + req.body.rate + req.body.comment;
    console.log(req.body);
    console.log("<<<Data recieved from client<<<")
    SaveFile(req.body.name + "," + req.body.rate + "," + req.body.comment + "\n");
    res.end();
});

router.get("/ShowData", function(req, res){
    res.download("./Feedback.csv");
    console.log(">>>Sending Data>>>");
});

router.post("/Delete", function(req, res, next) {
    console.log(req.body.message);
    DeleteFile();
    res.end();
});

function SaveFile (data)
{
    fs.appendFile("./Feedback.csv", data, function (err){
        if (err) throw err;
    });
    console.log("<>Saved File!<>");
}

function DeleteFile ()
{
    fs.writeFile("./Feedback.csv", "Name,Stimmung,Kommentar \n", function (err) {
        if (err) throw err;
        console.log(">>>File Deleted.<<<");
    });
}

function GetFile (){
    return(
        fs.open("./Feedback.csv", "r",function (err, file) {
            if (err) throw err;
            console.log("-File opened.-");
        })
    )
}

module.exports = router;