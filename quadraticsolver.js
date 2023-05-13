console.log("Hi I am Quadratic");

const quadratic_solver = (a,b,c) =>{
	let discriminant = Math.pow(b,2) - 4 * a * c;

	if(discriminant < 0){
		console.log(`This equation has not real root`)
		return `This equation has not real root`;
	}else if(discriminant === 0){
		let root = -b / 2 * a * c;
		console.log(`This equation has only one root, ${root}`);
		return `This equation has only one root, ${root}`;
	}else{
		let root1 = (-b + Math.sqrt(discriminant)) / 2 * a;
		let root2 = (-b - Math.sqrt(discriminant)) / 2 * a;
		console.log(`This equation have two root, root1-> ${root1} and root2-> ${root2}`)
		return `This equation have two root, root 1 ${root1} and root2 ${root2}`;
	}
}

quadratic_solver(2,-4,2);
quadratic_solver(33,12,9);
quadratic_solver(1,-6,8);