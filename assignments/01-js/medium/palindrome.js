function isPalindrome(str) {
  // Handle empty strings or strings with one character
  if (str.length <= 1) {
    return true;
  }

  let left = 0;
  let right = str.length - 1;

  // Iterate while left pointer is less than or equal to right pointer
  while (left <= right) {
    // Convert characters to lowercase for case-insensitive comparison
    const charLeft = str[left].toLowerCase();
    const charRight = str[right].toLowerCase();

    // Check if characters are alphanumeric (letters or numbers)
    if (!isAlphanumeric(charLeft)) {
      left++;
      continue; // Skip non-alphanumeric characters on the left
    }

    if (!isAlphanumeric(charRight)) {
      right--;
      continue; // Skip non-alphanumeric characters on the right
    }

    // Compare characters, return false if not equal
    if (charLeft !== charRight) {
      return false;
    }

    left++;
    right--;
  }

  // If loop completes, all characters match, return true
  return true;
}

function isAlphanumeric(char) {
  // Regular expression for alphanumeric characters (letters or numbers)
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(char); // true if matches  /^[a-zA-Z0-9]+$/
}

module.exports = isPalindrome;
