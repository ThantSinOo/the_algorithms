// Solution (1)

// let palindrome = (arr) =>{
// 	let result = [];
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] !== arr[i -1]){
// 			result.push(arr[i]);
// 		}
// 	}
// 	return result;
// }


// console.log("Answer", palindrome([2,4,4,6,6,88,88,2,5,13,]) )

// Solution(2)


const RemoveDuplicates = (nums) => {
  i = 1;

  size = nums.length;

  while (i < size) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      size -= 1;
    } else i += 1;
  }

  return nums;
};

console.log("Answer 2", RemoveDuplicates([2,4,4,6,6,88,88,2,5,13,]))