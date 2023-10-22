let evenOddChecker = ( arr ) =>{
    for(let i = 0; i < arr.length; i ++){
        if(i % 2 === 0){
             console.log("It is even");
        }else{
             console.log("It is odd");
        }
    }
}

evenOddChecker([1,2,3,4,5,6]);