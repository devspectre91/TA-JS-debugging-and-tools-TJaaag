
//testing framework

function test(message, callback){

    try{
       callback();
       console.log(`passed `+ message);
    }
    catch(error){
        console.error(error);
        console.log(`failed `+ message);
    }
}


//assertion framework
function expect(result){
    return{
        toEqual:function(expected){
            if(result!=expected){
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        isTypeNumber:function(expected){
            if(typeof result !==expected){
                throw new Error(`${result}type is not number`);
            }
        }
      
    }
}

//Question 1: 
var numberA=0;
var numberB=0;
function getSum(numA, numB){
    numberA=numA;
    numberB=numB;
    return numA + numB;
}

function isPositive(){
   if(numberA>0 && numberB>0 ){
       result=true;
   }
   else{
       result=false;
   }
    expected=true;
    expect(result).toEqual(expected);
}
function isNumber(){
    result=getSum(-1,100);
    expected="number";
    expect(result).isTypeNumber(expected);
}

function isEvenSum(){
    result=getSum(2,10)%2==0;
    expected=true;
    expect(result).toEqual(expected);
}
function isOddSum(){
    result=getSum(2,10)%2!==0;
    expected=true;
    expect(result).toEqual(expected);
}
function isSame(){
      getSum(3,3);
      result=(numberA==numberB);
    expected=true;
    expect(result).toEqual(expected);
}
//Tests:



test("Is argument type numbers", isNumber);
test("Are the numbers positive", isPositive);
test("Is their sum even", isEvenSum);
test("Is their sum odd", isOddSum);
test("Are arguments same", isSame);



//Question 2:

function getMultiplication(numA, numB){
    numberA=numA;
    numberB=numB;
    return numA * numB;
}

function isPositiveM(){
    if(numberA>0 && numberB>0 ){
        result=true;
    }
    else{
        result=false;
    }
     expected=true;
     expect(result).toEqual(expected);
 }
 function isNumberM(){
     result= getMultiplication(-1,100);
     expected="number";
     expect(result).isTypeNumber(expected);
 }
 
 function isResultEven(){
     result= getMultiplication(2,10)%2==0;
     expected=true;
     expect(result).toEqual(expected);
 }
 function isResultOdd(){
     result =getMultiplication(3,5)%2!==0;
     expected=true;
     expect(result).toEqual(expected);
 }
 function areArgumentsSame(){
     getMultiplication(3,3);
       result=(numberA==numberB);
     expected=true;
     expect(result).toEqual(expected);
 }

test("Is argument type numbers", isNumberM);
test("Are the numbers positive", isPositiveM);
test("Is their multiplicatio even", isResultEven);
test("Is their multiplication odd", isResultOdd);
test("Are the arguments same", areArgumentsSame);