/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let words = Array.from(str);
    let count = 0;
      // for (let i of words){
      //   for (let j of vowels){
      //     if(i.toLowerCase()===j){
      //       count+=1;
      //     }

      //   }
      // }
      for (const char of str) {
        if (vowels.includes(char.toLowerCase())) {
          count++;
        }
      }
    console.log(words);
    console.log(count);
    return count;
}

// countVowels("Azim");
countVowels("Keep smiling, boo.");
module.exports = countVowels;