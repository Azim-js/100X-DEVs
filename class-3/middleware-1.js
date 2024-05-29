const express = require("express");

const app = express();

let numberOfRequests = 0;

function calculateRequests(req, res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.get("/health-checkup", calculateRequests, function(req, res){

});

app.use(calculateRequests); // body parser 

app.post("/health-checkup2", function(req,res){
    console.log(req.body);
    res.json({
        msg: "hi there"
    })
});

app.listen(3000);