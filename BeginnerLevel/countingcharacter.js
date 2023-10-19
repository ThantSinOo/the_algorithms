function countCharacters(str) {
    const charCount = {}; // Create an empty object to store character counts
  
    // Loop through each character in the string
    for (let char of str) {
      // Check if the character is a letter or digit (alphanumeric)
      if (isAlphanumeric(char)) {
        // Convert the character to lowercase to ensure case-insensitive counting
        char = char.toLowerCase();
  
        // If the character is already in the charCount object, increment its count
        if (charCount[char]) {
          charCount[char]++;
        } else {
          // If the character is not in the object, initialize its count to 1
          charCount[char] = 1;
        }
      }
    }
  
    return charCount;
  }
  
  // Function to check if a character is alphanumeric (letter or digit)
  function isAlphanumeric(char) {
    const alphanumericChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return alphanumericChars.includes(char.toLowerCase());
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  const characterCounts = countCharacters(inputString);
  
  // Output the character counts
  for (let char in characterCounts) {
    console.log(`Character: ${char}, Count: ${characterCounts[char]}`);
  }
// ---------------------End of code --------------------------------------

  
  //   Explanation of the algorithm:

//   We create an empty object charCount to store the counts of each character.

//   We loop through each character in the input string str.

//   Inside the loop, we check if the character is alphanumeric (a letter or digit) using the isAlphanumeric function.

//   We convert the character to lowercase to ensure case-insensitive counting.

//   If the character is already a property in the charCount object, 
//   we increment its count. Otherwise, we initialize its count to 1.

//   Finally, we return the charCount object containing the character counts.

// -------------------------------------------------------------------------------------------------------


  // Where It can be use:


// The character counting algorithm can be used in various situations and applications 
// where you need to analyze the frequency of characters in a given text or string. 
// Here are some common use cases:

// 1. Text Analysis: 
//     You can use character counting to analyze the frequency of letters, 
//     digits, or specific characters in a text document. 
//     This can be useful for tasks like language analysis, text classification, 
//     or identifying patterns in a corpus of text.

// 2. Data Validation: 
//     Character counting can be employed for data validation and cleansing. 
//     For example, ensuring that user input in a form contains a certain number of characters or 
//     specific character types.

// 3. Password Strength Checker: 
//     When users create passwords, you can use character counting to check 
//     if their password contains a sufficient mix of characters, such as letters, digits, and special symbols.

// 4. String Manipulation: 
//     In some cases, you may need to manipulate a string based on the frequency of certain characters. 
//     For instance, you could sort a string based on character frequency or 
//     perform substitutions based on character occurrences.

// 5. Text-Based Games: 
//     In word games or puzzle games, you might want to check if a word can be formed 
//     using a set of characters. 
//     Counting the characters in both the given set and the word can help determine 
//     if it's a valid move.

// 6. Compression Algorithms:
//     Some compression algorithms, like Huffman coding, make use of character frequency
//     to represent frequently occurring characters with shorter codes, 
//     resulting in more efficient compression.

// 7. Data Analysis: 
//     In data analysis tasks, character counting can be useful for processing and
//     analyzing text data within datasets, 
//     such as social media posts, customer reviews, or user comments.

// 8. Security:
//     In cybersecurity, character counting can help analyze and detect patterns 
//     in network traffic or log files, aiding in the identification of anomalies or potential security threats.

// 9. Search Engine Optimization (SEO): 
//     When optimizing web content for search engines, 
//     understanding the frequency of specific keywords or phrases in a webpage's content can be crucial. 
//     Character counting can help with keyword analysis.

// 10. Education:
//     Character counting can be used as an educational tool to teach programming, 
//     data analysis, and text processing concepts to students.

// These are just a few examples of how character counting algorithms can be applied in various domains. 
// The versatility of character counting makes it a valuable tool in many programming and data analysis tasks.