// filesystem module
const fs = require("fs");

fs.readFile("example.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hi there");

let a=0;
// takes very long, longer than the file read
for (let i=0; i<1000000; i++){
    a++;
}

console.log("hi there 2");

// ugly way of async without promises

function azimReadFile(cb){
    fs.readFile("example.txt", "utf-8", function(err,data){
        cb(data);
    });
}

// callback function to call

function onDone(data){
    console.log(data);
}

azimReadFile(onDone)
