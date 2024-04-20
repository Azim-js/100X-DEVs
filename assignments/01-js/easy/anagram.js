/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
 // Handle edge cases: empty strings or different lengths
  if(str1.length !== str2.length) return false;
  if(str1 === "" || str2 === "" ) return true;

  // convert to lowercase and remove spaces for case-insensitive comparison

  str1 = str1.toLowerCase().replace(/\s/g,"");
  str2 = str2.toLowerCase().replace(/\s/g,"");

  // create a charater count object to track letter frequency

  const charCount = {};
  for(let char of str1){
    charCount[char] = (charCount[char] || 0 ) +1;
  }

  //  check if each character in str2 has the same frequency as in str1

  for(let char of str2){
    if(!charCount[char]) return false;
    charCount[char]--;
  }
  // All characters in str2 matched the frequency in str1
  return true;
}

module.exports = isAnagram;
