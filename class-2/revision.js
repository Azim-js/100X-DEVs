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