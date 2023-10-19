const find_area_of_triangle = (a,b,c) =>{
	let s = (a + b + c) / 2;
	let area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
	console.log("The area of triangle is ", area);
	return area;
}

find_area_of_triangle(3,7,8);