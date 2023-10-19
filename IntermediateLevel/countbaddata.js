console.log("Count Bad Data work");

const count_bad_data = (arr) =>{
	let count = 0;

	for(let i = 0; i < arr.length; i++){
		if(arr[i] === undefined || arr[i] === null || arr[i] === '' ){
			count ++;
			if(count < 1){
				console.log('There is no bad data in that array');
			}
			if(count < 2){
				console.log(`There is ${count} bad data in that array`);
			}else{
				console.log(`There are ${count} bad datas in that array`);
			}
		}
	}

	// return count;
}

count_bad_data([1,3,5,3,'',false]);
count_bad_data([3,6,88,4,22,5,232]);