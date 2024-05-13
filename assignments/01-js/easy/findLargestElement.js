/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

//  we can use Math.max(...numbers);
// The spread syntax (...numbers) unpacks the numbers array into individual arguments for Math.max, allowing it to effectively compare all elements 

function findLargestElement(numbers) {
   let largest = numbers[0];

   for(let x of numbers){
    if(largest < x){
        largest = x;
    }
   }
   return largest;
}

module.exports = findLargestElement;