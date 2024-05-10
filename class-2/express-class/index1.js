const express = require("express");
const app = express();

const users = [{
    name: "Azim",
        kidneys: [{
            healthy: true
        },{
            healthy: true
        }]
 }];

app.get("/",function(req,res){
    const azimKidneys = users[0].kidneys;
    const numberOfKidneys= azimKidneys.length;
    console.log(azimKidneys);
    console.log(numberOfKidneys);

    let numberOfHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys;i++){
            if(azimKidneys[i].healthy){
                numberOfHealthyKidneys+=1;
            }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

    // healthy kidneys : filter
})

app.listen(3000);