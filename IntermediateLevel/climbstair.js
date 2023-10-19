let climbstair = (n)=>{
	let prev = 0;
	let cur = prev;
	let temp

	for(let i = 0; i < n; i++){
		temp = prev;
		prev = cur;
		cur += temp
	}

	return cur;
}