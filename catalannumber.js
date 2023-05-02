// console.log('Hi I am Catalan');

let catalan = (n) =>{
	if(n <= 1){
		return 1;
	}

	let result = 0;

	for(let i = 0; i < n; i++){
		result += catalan(i) * catalan(n - i - 1);
	}

	return result;
}



console.log(catalan(5));