//  creating an http server
// express
//  node default library => no 

const express = require("express");

const app = express();

function sum(n){
    let ans = 0;
    for (let i = 1; i<=n; i++){
        ans = ans+i;
    }
    return ans;
}

//  req, res => request and response

app.get("/", function(req, res){
    const n = req.query.q;
    const ans = sum(n);
    res.send("Hi There! your ans is "+ ans);
})

app.listen(3000);