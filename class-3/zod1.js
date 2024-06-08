const { z } = require("zod");
const zod = require("zod");

// if this is an array of number with atleast 1 input, return true else return false 

function validateInput(arr){
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);
}

validateInput([1,2,3]);

//  use case can be like below object 

// {
//     email => string => should look like email
//     password => should have 8 letters
// }
function validateEmail(obj){

    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    const response = schema.safeParse(obj);
    console.log(response);
}

validateEmail({
    email: "az1234im@gmail.com",
    password: "12345678"
})

validateEmail({
    email: "az1234im@gmail.com",
    password: "1"
})

validateEmail({
    email: "az",
    password: "1"
})


