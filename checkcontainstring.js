console.log("Hello Contain String");

let contain_string = (s1,s2) =>{
	if(s2.includes(s1)){
		console.log("s2 includes in s1");
		return true;

	}else{
		s2 = s2.split('').reverse().join('');
		if(s2.includes(s1)){
			console.log("s2 includes in s1");
			return true;
		}else{
			console.log("s2 doesn't includes in s1");
			return false;

		}
	}
}

// contain_string('hello','oll');
contain_string('hel','hello');