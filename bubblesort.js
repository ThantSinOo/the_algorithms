let bubblesort = (arr) =>{
	let n = arr.length;
	let swapped;

	do {
	swapped = false;

		for(let i=0; i < n-1 ; i++){
			if(arr[i] > arr[i + 1]){
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
		n--;
	} while (swapped);
	console.log("The sorted arr is = ", arr);
	return arr;
	
};

let sample = [9,8,4,2];

bubblesort(sample);


// Explanation about Bubblesort Algorithms 
	//Bubble sort is a simple and elementary sorting algorithm 
	//that works by repeatedly stepping through the list to be sorted, 
	//comparing each pair of adjacent items, and swapping them
	//if they are in the wrong order. 
	//This process is repeated until no more swaps are needed, 
	//indicating that the list is sorted. 
	
	//Here's a step-by-step explanation of how bubble sort works:

// 1. Start with an unsorted list of elements.

// 2. Compare the first two elements in the list. If the first element is greater than the second element, swap them.

// 3. Move to the next pair of elements (the second and third elements) and compare them. Again, swap if necessary.

// 4. Continue this process, moving one pair at a time through the list, comparing and swapping as needed, 
	//until you reach the end of the list. This completes one pass through the list.

// 5. Repeat steps 2-4 for a total number of passes equal to the number of elements in the list.

// 6. After each pass, the largest unsorted element will "bubble up" to the end of the list, 
	//so you can reduce the number of comparisons in the next pass because you don't need to check the already sorted portion.

// 7. Continue this process until no swaps are made in a pass, which means the list is now sorted.

// Bubble sort is straightforward to understand and implement, but it is not very efficient, 
	//especially for large lists. Its worst-case time complexity is O(n^2), 
	//where n is the number of elements in the list, which makes it impractical for sorting large datasets. 
	//There are more efficient sorting algorithms, such as quicksort, mergesort, and heapsort, 
	//which are generally preferred for practical sorting tasks. 
	//Bubble sort is primarily used for educational purposes to teach the basic concept of sorting algorithms.
