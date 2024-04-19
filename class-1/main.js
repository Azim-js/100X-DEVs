// write a program to greet a person given their first name and lastname

let firstName = "Mohammed";
let lastName = "Azim";
let age = 24;
let isMarried = false;

console.log("This person's name is "+firstName+lastName+" and their age is "+age);

console.log("this person's name is ");
console.log(firstName+lastName);


//  if else

if(isMarried){
    console.log("The person"+firstName+"is Married");
}
else{
    console.log(firstName+lastName+" is not married");
}

// count from 0 to 1000

let answer=0;

for(i=1;i<=1000;i++)
{
    answer+=i;
}

console.log("The sum from 1 to 1000 is "+ answer);


// Arrays and objects


const ages = [21,22,23,24,25];
const numberOfPeople=ages.length;

for(let i=0; i<numberOfPeople;i++){
    if(ages[i] %2 == 0){
        console.log(ages[i]);
    }
}

// assingment

//  write a program that prints the biggest number in arrays 

numbers=[2,100,500,99,23,1,2000,7999,0];

countOfNumbers=numbers.length;

largest=0;

for(let i=0;i<countOfNumbers;i++)
{
    if(numbers[i]>largest){
        largest=numbers[i];
    }
}

console.log(largest);

// reverse of elements 

elements=[23,"Azim",453,"Rian"]

revElements=[]

for(let i=elements.length-1;i>=0;i--){
    revElements.push(elements[i])
}
console.log("revese array is : ", revElements)




// arrays example

const personArray = ["Azim", "rian","hari"];
const genderArray= ["male","male","male"];
const numberOfUsers= personArray.length;

for(let i=0;i<numberOfUsers;i++){
    if(genderArray[i]=="male"){
        console.log(personArray[i]);
    }
}

// Objects

console.log("----------------------Objects----------------------")

const users1={
    firstName: "Mohammed",
    gender: "male"
}

console.log(users1["gender"]); // to access the object
console.log(users1.gender)

const users =  [1,2,3]

const users2= ["Azim","Rian"]

const allUsers=[{
    firstName: "Azim",
    gender: "male"
},{
    firstName:"Rian",
    gender: "male"

},
{
    firstName: "Shabnam",
    gender: "female"
}]


for(let i=0; i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="female"){
        console.log(allUsers[i]["firstName"])
    }
 }


 console.log("------------functions---------------------")

//  Functions out logic in your program 

//  write a function to find sum of two numbers 

function findSum(a,b){
    const sumValue=a+b;
    return sumValue;
}

const value = findSum(1,2);
const value2=findSum(1,15);

console.log(value);



// write another function that displays this result in pretty format 

function sum(num1, num2, fnToCall){
    let result = num1+num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is : "+ data);
}

function displayResultPassive(data){
    console.log("Sum's result is: "+ data);
}

// You are only allowed to call one function to call one function after this 
// How will you displayResult of sum

// callbacks 

const ans = sum(1,2,displayResult);


//  function calculate Arthimetic 

function calculateArthimetic(a,b,arithmeticFunction){
    // if(type == "sum"){
    //     const value= sum(a,b);
    //     return value;
    // }
    // if(type == "minus"){
    //     const value=sub(a,b);
    //     return value;
    // }
    const ans= arithmeticFunction(a,b);
    return ans;
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const ans1= calculateArthimetic(3,1,sub)
console.log(ans1)


// function to greet

function greet(){
    console.log("hello world");
}

// set time out 

setTimeout(greet,3*1000) //(function, seconds ) call a function with seconds 


// function to greet an Alien

function greetAlien(){
    console.log("Hello Alien ");
}

setInterval(greetAlien,1*1000) // every one second

//  synchronous vs Asynchronous fucntions

