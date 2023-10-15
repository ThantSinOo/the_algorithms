// FizzBuzz Algorit

let num = 200;
function FizzBuzz (num) {
    for(let i = 1; i <= num; i++){
        // Here To Check FizzBuzz( divisible by both 3 and 5), you can also write like (i % 3 === 0 && i % 5 === 0), 
        // instead divided by 15 is also same and efficient  
        if(i % 15 === 0){
            console.warn('fizzbuzz', i);
        }else if(i % 3 === 0){
            console.log('fizz',i);
        }else if(i % 5 === 0){
            console.log('buzz',i);
        }else{
            console.log('Neither Fizz Nor Buzz', i)
        }
    }
}

console.log(FizzBuzz(num));

// ---------------------End of code ---------------------------------------------------------------------


  //   Explanation of the algorithm:

//      The FizzBuzz algorithm is a common coding challenge 
//      often used as an interview question or a basic programming exercise. 
//      It is designed to test a programmer's ability to use conditional statements and loops. 
//      The problem is defined as follows:

//      Start at a specified initial number (usually 1) and count up to a specified ending number (e.g., 100).

//      For each number in that range, do the following:
//         If the number is divisible by 3, print "Fizz."
//         If the number is divisible by 5, print "Buzz."
//         If the number is divisible by both 3 and 5, print "FizzBuzz."
//         If none of the above conditions are met, simply print the number itself.

//      The goal of FizzBuzz is to write a program that can efficiently and correctly produce 
//      this sequence of numbers and words. 

//      It serves as a basic exercise to practice control structures (if-else statements) and 
//      looping constructs (typically a for loop or while loop).