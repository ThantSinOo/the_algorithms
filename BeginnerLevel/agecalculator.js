let calcAge = (bornDate) =>{
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentAge = 0;
    if(bornDate){
        currentAge = currentYear - bornDate;
    }
    console.log(`Your Age is  ${currentAge}`);
}

calcAge(1998);