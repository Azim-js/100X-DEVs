# Mongo DB installation 

1. cloud installation and connecting it via mongoDB compass
2. or run up a mongo db container 

# Postgres sql

1. using neon db for creating a postgresql 

# Middlewares and global catches 

- middlewares, authentication, global catches, zod 
- Example Hospital (covid)
    Before you reach the doctor 
        1. your adhar/insurance info is taken. Only if you have insurance you proceed
        2. Blood test is done
        3. BP is checked, only if BP is reasonable user proceeds
- Equivalent code 

```
const express = require("express");

const app = expres();

app.get("/health-checkup", function (req,res){
    //do health checks here 
    res.send("Your heart is healthy");
}) 
```

# Questions

How do you do 

1. Auth checks? (Does this user have funds to visit the doctor)
2. Ensure input by the user is valid( BP / blood tests)

# Answers 

- Middlewares

Add constraints to routes 

1. User needs to send a kidneyId as a query param which should be a number from 1-2 (humans only has 2 kidneys)
2. User should send a username and password in headers

```
const express = require("express");

const app = express();

app.get("/health-checkup", function(req,res){
    const kidneyId = req.query.kidneyId;
    const userName= req.headers.userName;
    const password = req.headers.password;

    // Username checks

    if(userName ! = "azim" && password != "pass"){
        res.status(403).json({
            msg: "User dosen't exist",
        });
        return;
    }
    // Input Validation
    
    if(kidneyId !=1 && kidneyId !=2){
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }

    res.send("your kidney is healthy");

})
```

# DRY (Do Not repeat your self)

- Create a function that fixs the DRY 

example : 

```
function usernameValidator(username, password){
    if(username != "azim" && password != "pass"{
        return false;
    })
    return true;
}
```

# Why do you need input validation 

- example

```
const express = require('express');

const app = express();

app.post("/health-checkup", function (req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your Kidney lenght is " + kidneyLength);
});

app.listen(3000);
```

# Global catches help you give the user a better error message

```
(`(err,req,res,next)`)
```

# Authentication & Zod

- TypeScript-first schema validation with static type inference 

    1. Installation ``` npm install zod ```


# Fetch, Authentication and  Databases  

- The fetch API 

1. Built Http server (get , post , delete, put reequests)

2. How to send a request when a button is clicked ( fetch data from the backend )

3. Until now sent requests via 
    1. postman
    2. Browser URL

- There's a third way 

    - html code -> http server



