const express = require('express');

const app = express();


app.use(express.json()); // always needed for the post so that the body gets extracted 

app.post("/health-checkup", function (req,res){
    //  kidneys = [1,2] in arrays
    const kidneys = req.body.kidneys;
    // validate kidneys 
    if(!Array.isArray(kidneys)){
        res.json({
            msg: "wrong inputs"
        })
    }
    const kidneyLength = kidneys.length;

    res.send("Your Kidney length is " + kidneyLength);
});

//  global catches 

app.use(function(err, req, res, next){
    // errorCount++;   if breaking the threshold need a srs check
    res.json({
        msg: "sorry something is up with our server"
    })
})

app.listen(3000);