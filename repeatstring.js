console.log("Hello I am Repeat");

let repeat_string_nth_times = (str,num)=>{
	if(num < 1){
		return ""
	};

	return str + " / " + repeat_string_nth_times(str,num - 1) ;
};

console.log("Answer", repeat_string_nth_times('AABB',8));