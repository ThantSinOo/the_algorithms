let reverse = (arr)=>{
	for (i = 0, j = arr.length - 1; i < arr.length /2; i++, j--){
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	console.log(arr)
	return arr;
};

reverse([1,2,3,4,5]);

console.log('reverse', reverse([1,2,3,4,5]));