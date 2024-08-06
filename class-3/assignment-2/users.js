const express = require("express");
const mongoose = require("mongoose");

const app = express()
app.use(express.json());

mongoose.connect("mongodb+srv://admin:IzcFIVm3hw8hIkCi@cluster0.ogogseb.mongodb.net/userappnew")

// describe what the collection should be schema 

const User = mongoose.model('Users',{
        name: String,
        email: String,
        password: String
    });



app.post("/signup",function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    // CRUD => Create , Read , Update , Delete

    // const existingUser = await User.findOne({ email: username});
    // if(existingUser){
    //     return res.status(400).send("Username already exists");
    // }

    const user= new User({ 
        name: name, 
        email: username,
        password: password
    });

    user.save(); // to put the data into the mogodb 
    res.json({
        "msg": "User created Sucessfully"
    })
})

app.listen(3000);