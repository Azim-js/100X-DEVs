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

    - html code -> http server - fetch api 

# Authentication 

- Project for today - 
    let people sign up to your website only allow signed in users to see people( create a dummy people list )

-  Restrict users only selected users will be to see the data 

- Lets understand authentication 

    1. SSO - login with google , fb etc ..
    2. easy way is to create a username and password based on auth 


# Lets understand some cryptography 

1. Hashing
2. Encryption 
3. json web token 
4. Local storage

1. Hashing - 
    real world example 
    
    - when sign up - stores in a backend 
    - it get converts into hash passwords - a single input has the same hash 
    - the hash passords gets stored in the be 
    - the hash can never be decrypted 
    - the be converts the hash and compares the stored hash 
    - hashing is always a 1 way 

2. Encryption 
    - is always 2 ways (provided with a key)

3. JSON web token (JWT)

    - divided into 3 parts -> 
    1. takes json input 
    2. web use case
    3. takes the input and creates a token 

    input - output (however has a output can see the input - look at what the contents are)

    Authorization - Bearer - JWT - JWT.io and paste 
    and we can see the json data which was hashed 

    - one complex object input into a jwt token - compress the data 
    - verification which will be done a authorzier 
    - jwt.encode -> jwt.verfiy(long text, password )

4. Local Storage 

    - A place in your browser where you can store some data usually things that are stored include - 
        1. Authentication tokens 
        2. User langauage preference 
        3. User thene prefernece 
        


