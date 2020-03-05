var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();
var fs = require("fs");

router.get("/", function(req, res, next) {
    res.send("API: Standby");
});

router.get("/SaveFormGet", function(req, res, next) {
    var name = req.query.name;
    var rate = req.query.rate;
    var comment = req.query.comment;
    res.send("API: Submitting Form Data");
    SaveFile(name + "|" + rate + "|" + comment + "|-|");
});

router.post("/SaveFormPost",function(req, res){
    var FormData = req.body.name + req.body.rate + req.body.comment;
    console.log(req.body);
    console.log("<<<Data recieved from client<<<")
    SaveFile(" | " + req.body.name + " - " + req.body.rate + " - " + req.body.comment);
    //SaveFile("Hi");
    res.end();
});

router.get("/ShowData", function(req, res){
    res.download("./Feedback.txt");
    console.log(">>>Sending Data>>>");
});

router.get("/Delete", function(req, res, next) {
    res.send("API: FormDeletion");
    DeleteFile();
});

function SaveFile (data)
{
    fs.appendFile("./Feedback.txt", data, function (err){
        if (err) throw err;
    });
    console.log("-Saved File!-");
}

function DeleteFile ()
{
    fs.write("./Feedback.txt", "",function (err) {
        if (err) throw err;
        console.log("-File deleted.-");
    });
}

function GetFile (){
    return(
        fs.open("./Feedback.txt", "r",function (err, file) {
            if (err) throw err;
            console.log("-File opened.-");
        })
    )
}

module.exports = router;