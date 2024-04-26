// pretty code

const fs = require('fs');
const { promiseHooks } = require('v8');

//  my own asynchronous function 

// promise to be resolved 

function azimsReadFile(){
    console.log("inside azims read file")
    var p = new Promise(function(resolve) {
        console.log("inside promise");
        fs.readFile("example.txt", "utf-8", function(err, data){
            console.log("before resolve");
            resolve(data);
        });
    })
    return p;
}

// callback function to call

function onDone(data) {
    console.log(data);
}

var a = azimsReadFile()
console.log(a)
// need to use .then
a.then(onDone)

//  prmosie class 

// var p = new Promise();

var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo")
    },1000)
    // resolve("foo");

});

function callback(){
    console.log(d);
}

d.then(callback)
 
// promise has three states 
// 1. Pending 
// 2. resolved
// 3. rejected