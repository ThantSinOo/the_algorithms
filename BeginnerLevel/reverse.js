function reverseInput(input){
	// First check the input type is string or not with "typeof" operator 
	if(typeof input === 'string'){

		reverseString = '';

		// this "for" loop starts at the end of the input string and 
		// works its way backward, one character at a time, 
		// appending each character to the "reversedString" variable. 
		// As it progresses, it effectively reverses 
		// the characters in the string.
		for(let i = input.length -1; i >= 0 ; i --){
			reverseString += input[i];
		}

		console.log("The input is string", reverseString);
		return reverseString;

		// Then use "Array.isArray()"" method to determine 
		// the input is array or not ?
	}else if( Array.isArray(input)){

			reverseArray = [];

			// this "for" loop works the same way as mentioned in above 
			for(let i = input.length; i >=0 ; i --){
				reverseArray.push(input[i]);
			}

		console.log("The input is not array", reverseArray);
		return reverseArray;
	
	// If the input is neither array nor string return the following console 
	}else{

		console.warn("Your Input is neither String nor Array");
	
	}
}

let input = 'Hello';
let input1 = [5,4,3,2,1];
reverseInput(input);

// ---------------------End of code ---------------------------------------------------------------------



// Here's the code walk-through:

//    - We define a function named reverseArrayOrString that takes one argument, input.

//    - Inside the function, we use an if-else statement to check the type of the input. 
// 		We do this with typeof input.
//         (1) If input is a string, we enter the first block of code.
//         (2) If input is an array, we enter the second block of code.
//         (3) If input is neither a string nor an array, we enter the third block of code, 
// 				which returns an error message.

//    - In the first block of code (if input is a string), 
// 		we initialize an empty string called reversed.

//    - We then use a for loop to iterate through the characters of the input string in reverse order. 
// 		The loop starts from the end of the string (input.length - 1) and 
// 		goes backward until i is greater than or equal to 0.

//    - Inside the loop, we append each character from input to the reversed string. 
// 		This effectively reverses the input string.

//    - After the loop, we return the reversed string.

//    - In the second block of code (if input is an array), 
// 		we initialize an empty array called reversedArray.

//    - We use a for loop similar to the previous one 
// 		to iterate through the elements of the input array in reverse order. 
// 		We start from the end of the array (input.length - 1) and go backward.

//    - Inside the loop, we use the push method to add each element from input to the reversedArray. 
// 		This builds a new array with elements in reverse order.

//    - After the loop, we return the reversedArray, which is the reversed version of the input array.

//    - In the third block of code, if input is neither a string nor an array, 
// 		we return the error message: "Input must be a string or an array."

// The function is designed to reverse both strings and arrays based on the type of input provided. 
// If the input doesn't match either of these types, it provides an error message.




// Resource to learn more 

// To Learn about Array.isArray() method here is link below 
// Link -->>>  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

// To Learn about for loop here is link below 
// Link -->>  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for