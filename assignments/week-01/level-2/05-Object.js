// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);  // gives orginal object 

  let keys = Object.keys(obj); // gives array of the all the keys present in the object
  console.log("After Object.keys():", keys);

  let values = Object.values(obj); // gives array of the all the values present in the object
  console.log("After Object.values():", values);

  let entries = Object.entries(obj); // gives the array of key and values present in the object 
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property"); // check if the key is presnt or not in the object
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" }); // merge two objects 
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
