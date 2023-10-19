function sumOfArray(array) {
    // create a variable to store the sum result and it is initiated as 0 
    let sum = 0;

    // loop through each element inside the array using the index variable i 
    for(let i = 0; i < array.length; i++){
        // Add the value of current element into the sum variable, 
        // do that step until there is no more element left in array 
        sum += array[i];
    }
    // checking console the value of sum is right? 
    // By the way make habit to use console to check your output or if you can't find the error.
    // That will save you a lot of time to deal with debugging  
    console.log("Total Sum", sum);
    
    return sum;
}

let array = [1,2,3];
// Revoke the function
sumOfArray(array);

// ---------------------End of code --------------------------------------

  
  //   Explanation of the algorithm:

// 1.  Initialize a variable sum to zero. This variable will be used to accumulate the sum of the array elements.

// 2.  Iterate through each element in the array using a loop, such as a for loop or you can even use a foreach loop, 
//     depending on the programming language you are using.
//     For each element in the array, add its value to the sum variable.

// 3.  After the loop is complete, the sum variable will contain the total sum of all elements in the array.

// 4.  Return the value of sum as the result, or use it as needed in your program.


// -------------------------------------------------------------------------------------------------------


  // Where It can be use:

// The concept of this algorithm for summing all elements in an array is used in a wide range of programming scenarios 
// whenever you need to calculate the total sum of values stored in an array. 
// Here are a few common examples of where this algorithm is applied:

    // 1. Mathematical Calculations: 
    //     This algorithm is used in various mathematical calculations, 
    //     such as finding the average, median, or other statistical measures from a dataset.

    // 2. Financial Applications: 
    //     In financial software, it's used to calculate things like the total value of assets, 
    //     total expenses, or net worth based on arrays of financial transactions or holdings.

    // 3. Data Analysis: 
    //     Data analysis and statistics applications often require summing up values in arrays, 
    //     especially when dealing with datasets.

    // 4. Array Manipulation: 
    //     When working with arrays in programming, you may need to sum elements to perform certain operations, 
    //     such as sorting or filtering.

    // 5. Games: 
    //     In game development, this algorithm can be used to calculate scores, currency totals, or other game-related values.

    // 6. Web Development: 
    //     In web development, you might use this algorithm to aggregate data from user inputs, 
    //     such as shopping carts, ratings, or user interactions.