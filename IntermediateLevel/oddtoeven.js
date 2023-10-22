const odd_to_even = (arr) =>{
	let original_even = [];
	let not_even = [];
	for(let i = 0; i < arr.length; i++){
		if(i % 2 === 0){
			original_even.push(i);
		}else{
			not_even.push(i);
		}
		console.log(i);
	}
	console.log("Original Even",original_even);
	console.log("Edited Even",not_even);
}

odd_to_even([1,2,3,4,5,6,7,8,9,10]);
