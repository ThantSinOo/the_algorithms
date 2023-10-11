function reverseInput(input){
	if(typeof input === 'string'){

		reverseString = '';

		for(let i = input.length -1; i >= 0 ; i --){
			reverseString += input[i];
		}

		console.log("The input is string", reverseString);
		return reverseString;

	}else if( Array.isArray(input)){

			reverseArray = [];

			for(let i = input.length; i >=0 ; i --){
				reverseArray.push(input[i]);
			}

		console.log("The input is not array", reverseArray);
		return reverseArray;

	}else{

		console.warn("Your Input is neither String nor Array");
	
	}
}

let input = 'Hello';
let input1 = [5,4,3,2,1];
reverseInput(input);