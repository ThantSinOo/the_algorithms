let evenOddChecker = ( arr ) =>{
    let evenArray = [];
    let oddArray = []; 
    for(let i = 0; i < arr.length; i ++){
        if(i % 2 === 0){
             console.log("It is even", evenArray);
            evenArray.push(i);
        }else{
             console.log("It is odd", oddArray);
            oddArray.push(i);
        }
    }
}

evenOddChecker([1,2,3,4,5,6]);