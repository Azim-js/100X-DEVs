// JSON Javascript object notations
function jsonMethods(jsonString){
    console.log("Original JSON String:", jsonString);
    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString); // parse it into json object JSON.parse
    console.log("After JSON.parse():", parsedObject);

    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject); // parse into a back into a string JSON.stringfy
    console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString = 
'{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}'; // simple string

jsonMethods(sampleJSONString);


// object notation example

const users = {
    name: "Azim",
    age: 24,
    gender: "male",
}

console.log(users["name"])