// Async await syntax

// again, just syntactic sugar. Still uses callbacks/ Promises under the hood

// Normal syntax

function azimAsyncFunction() {
    let p = new Promise(function(resolve){
        // do some async logic here
        resolve("hi there!")
    });
    return p;
}

function main() {
    azimAsyncFunction().then(function(value){
        console.log(value);
    });
}


// Async/await syntax

function azimAsyncFunction2() {
    let p = new Promise(function(resolve){
         // do some async logic here
         resolve("hi there!")
    });
    return p;
}

async function main() {
    const value = await azimAsyncFunction2();
    console.log(value)
}