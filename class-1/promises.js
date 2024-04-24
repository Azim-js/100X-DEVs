// pretty code

const fs = require('fs');

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