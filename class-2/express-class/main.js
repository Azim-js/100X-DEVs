const express = require("express");
const app = express();
app.use(express.json());

const users = [{
    name: "Azim",
        kidneys: [{
            healthy: false
        }]
 }];

// GET method
//   query parameters

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

    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

    // healthy kidneys : filter
})


// send data in body

//  middlewares need to be understood 

// POST method


app.post("/", function(req, res){
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

//  PUT method

app.put("/", function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
        for (let i = 0; i<users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({
    
        });
    }else{
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    }
    
})

// DELETE method

//  removing unhealthy kidneys

app.delete("/",function(req, res){
    // you should return 411 if there is no unhealthy kidney
    // only if atleast one unhealthy kidney is there do this, else return 411
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
    for (let i = 0; i<users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "Done!"
    })
    }else{
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    }
    
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i =0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);