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