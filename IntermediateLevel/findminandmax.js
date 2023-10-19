console.log("Hi MIN min and MAX max");

let find_min_and_max = (arr)=>{
	
	let min = arr[0];
	let max = arr[0];

	for( let i = 0; i < arr.length; i++){
		if(arr[i] < min){
			 min = arr[i];
		}
		if(arr[i] > max){
			max = arr[i];
		}
	}

}

// let answer = find_min_and_max([12,44,89,0,2,5,890]);

console.log("Answer",find_min_and_max([12,44,89,0,2,5,890]));