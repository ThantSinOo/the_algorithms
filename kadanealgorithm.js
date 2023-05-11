let kedane_algo = ()=>{
	let array = [1,4,-4,99,-23,0,-89,432];
	let current_sum = 0;
	let max_sum = -Infinity;
	// let max_sum2 = Number.NEGATIVE_INFINITY;

	console.log("Max sum is",max_sum);
	// console.log("Max sum 2 is",max_sum2);

	for(let i = 0; i < array.length; i++){
		current_sum += array[i];
		if(current_sum > max_sum){
			max_sum = current_sum;
		}else if(current_sum < 0){
			current_sum = 0;
		}
	}
	console.log(max_sum);
	return max_sum;
};

kedane_algo();