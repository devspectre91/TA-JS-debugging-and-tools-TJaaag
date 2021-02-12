
//Question 1:

function getfullName(firstName="John", lastName="Doe"){
    return `${firstName} ${lastName}`;
}

getfullName("devanshu", "tiwari");



//Tests to run

if(getfullName("xyz", "pqr")!=="Xyz Pqr"){
    throw new Error("Failed to produce expected output");
}

if(getfullName(100, 123)!=="NaN"){
    throw new Error("Argument type not allowed");
}


//Question 2:

function getTotalAmount(amount=0, taxRate=0){


    if(amount==0){
        throw new Error("Amount cannot be zero");
    }

    if((taxRate>1||taxRate<0)==true){
        throw new Error("Rate is outside allowed limit");
    }
    
   

   return `${amount + (amount * taxRate)}`;
}


getTotalAmount(100, 0.5);

