// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Clean the string by removing spaces and converting to lowercase
    const cleanedStr = cleanString(str);
  
    // Compare characters from the start and end of the cleaned string
    let left = 0;                                       // Initialize a pointer at the start of the string
    let right = cleanedStr.length - 1;                  // Initialize a pointer at the end of the string
  
    while (left < right) {                              // While the pointers haven't crossed each other
      if (cleanedStr[left] !== cleanedStr[right]) {
        return false;                                   // If characters don't match, it's not a palindrome
      }
      left++;                                           // Move the left pointer to the right
      right--;                                          // Move the right pointer to the left
    }
  
    return true;                                        // If we reach here, it's a palindrome
  }

  
  // Function to clean a string by removing spaces and converting to lowercase
  function cleanString(str) {
    const cleanedChars = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
  
      // Only include alphanumeric characters (letters and digits)
      if (isAlphanumeric(char)) {
        cleanedChars.push(char);
      }
    }
    return cleanedChars.join('');  // Convert the array of characters back to a string
  }
  

  // Function to check if a character is alphanumeric (letter or digit)
  function isAlphanumeric(char) {
    const alphanumericChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return alphanumericChars.includes(char);
  }
  
  // Example usage:
  const testString1 = "koole";
  console.log(isPalindrome(testString1)); // Output: true
  
  const testString2 = "uppu";
  console.log(isPalindrome(testString2)); // Output: false
  