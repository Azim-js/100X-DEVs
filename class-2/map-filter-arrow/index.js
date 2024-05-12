//  map, filter,reduce and arrow fns 

// function sum(a,b){
//     return a+b;
// }

//  arrow functions

const sum = (a,b) => {
    return a+b;
}

const ans = sum(1,2);
console.log(ans);

//  given an array, give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5] inp
// [2,4,6,8,10] out

const input = [1, 2, 3, 4, 5];

function transform(i) {
    return i*2;
}
// solution 

const newArray = input.map((a)=>{return 2*a});
console.log(newArray);

//  create a map function that takes 2 inputs 
//  an array, and a transformation callback/fn
//  and transforms the array into a new one using the transformation fn 

// const newMap = (arr, fn) => {
//     const transformedArr = [];
//     for (let i=0;i< arr.length;i++){
//         transformedArr.push(fn(arr[i]));
//     }
//     return transformedArr;
// };

// console.log(newMap([1,2,3,4]))



//  filtering 

names = ["Azim","Rian"]

let newName= names.filter(function (n){
        if(n.startsWith("A")){
            return true;
        }
     else {
        return false;
        } 
});
console.log(newName);

//  Given an input array, give me bacl all the even values from it 

const arr = [1,2,3,4,5]

//  ans

const evenArr = input.filter((a)=> { return a%2 == 0})

console.log(evenArr)

