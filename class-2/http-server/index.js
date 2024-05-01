//  goal to create an http server

const express = require("express");

//  body-parser

const bodyParser = require("body-parser");




const app = express();

// console.log(t)

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/route-handler', function(req,res) {
    // res.send("Hello World!");
    res.json({
        nam: "Azim",
        age:23
    })
})

app.get('/', function(req,res) {
    console.log(req.headers.authorization)
    setTimeout(function() {
        res.status(401).send("hello world")
    }, 1000)
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
})

app.post("/conversations",(req,res)=>{
    console.log(req.headers)
    console.log(req.body)
    res.send({
        msg: "2+2=4"
    })
})

// npx nodemon index.js

// using node.js http module

// Create a todo app that lets users store todos on the server

//  try to create a http server from scratch in c

//  create an http server in rust using actix-web

// create an http server in golang using the gurrila framework 

//  Intro to post-man


//  create a todo application where u store data in a file

//  create a rust/golang/java http server

//  fetch api is to fetch data from somewhere

// set timeout