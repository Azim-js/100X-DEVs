// callbacks , Async , promises , await

// example 1

function main() {
    let a = 0;
    for(let i=0;i<100;i++){
        a = a+1;
    }
    console.log(a);
}
main();

// example 2 but some issue 
// 
const fs = require('fs');

// function putCopyrightFile(cb){
//     fs.readFile("example.txt", "utf-8",function(err,data){
//         data = data + "copyright 2024 Mohammed Azim";
//         fs.writeFile("example.txt",function(){
//             return cb();
//         })
//     });
// }

// putCopyrightFile(function(){
//     console.log("Copyright has been put in the file");
// })

// corrected code 

function putCopyrightFile(cb){
    fs.readFile("example.txt", "utf-8", function(err, data){
        if (err) {
            return cb(err);
        }
        data = data + "\ncopyright 2024 Mohammed Azim"; // Added a newline character here
        fs.writeFile("example.txt", data, function(err){ // Added data as the second argument
            if (err) {
                return cb(err);
            }
            cb(null); // Passing null as error argument since there's no error
        });
    });
}

putCopyrightFile(function(err){
    if (err) {
        console.error("An error occurred:", err);
    } else {
        console.log("Copyright has been put in the file");
    }
});


// example 3

function myOwnSetTimeOut(fn,duration){
    setTimeout(fn,duration);
}

myOwnSetTimeOut(function(){
    console.log(" Hi There !!")
},1000)


//  promises 

// function getPromises() {
//     let p1 = new Promise();
//     let p2 = new Promise();
//     return [p1, p2]
// }

// const x = getPromises();
// Promise.all()

function fn(){
    return "hello there";
}

let x = Promise.resolve(fn())

x.then(function(value){
    console.log(value)
})

// function myFunction() {
//     const p =  new Promise(Function(Reolve) {
//         //  not using and async
//         resolve("my own value");
//     })
//     return p
// }

// where does the resolve function gets defined

// const p = new Promise(function resolve){

// }

function sumOfSquares(a, cb){
    cb(a*a);
}

sumOfSquares(2, function(result){
    console.log(result);
})


// complete promises

// console.log("at the top 1")
// function promisifiedTimeout() {
//     console.log("function called 3")
//     return new promisifiedTimeout(function(resolve){
//         console.log("inside promise callback 4")
//         setTimeout(function() {
//             console.log("setTimeout called 5")
//             resolve("done baby! I am burnt out.");
//         },5000)
//     })
// }

// console.log("in the midle2")

// promisifiedTimeout().then(function(value){
//     console.log("prmisified 6")
//     console.log(value);
// })