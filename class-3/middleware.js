const express = require("express");

const app = express();

app.get("/health-checkup", function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyid;

    if(!(username === "azim" && password === "pass")){  // ugly (username !="azim" || password !="pass")
        res.status(400).json({
            "msg": "Somethings wrong with your inputs"
        })
        return
    }

    if (kidneyId !=1 && kidneyId !=2){
        res.status(400).json({
            "msg": "Something is wrong with your inputs"
        })
        return
    }

    res.json({
        msg: "Your kidney is fine!"
    })
})

app.listen(3000);