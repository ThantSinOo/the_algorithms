console.log("Hi I am Random Number Generator");

const generate_random_number = (max,min) =>{
	let timestamp = new Date().getTime();
	let random_num = Math.floor((timestamp / (max - min + 1))% (max - min + 1) + min);
	console.log("Timestamp", timestamp);
	console.log("Random Number",random_num);
}
generate_random_number(1,10);