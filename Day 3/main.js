function add(num1, num2) {
  let result = num1 * num2; //multiplication
  return result * 100; //answer 1200
}  
console.log(add(6, 2));

function subtract(num1,num2){
let result = num1 - num2; //subtraction
return result * 10; //answer 40
}
console.log(subtract(5,1));

function divide(num1,num2){
let result = num1 / num2; //division
return result * 10 //answer 30
}
console.log(subtract(6,3));

//using call back function; delegation method

function numFunction(numValue1,numValue2,numCallback){

let result = numCallback(numValue1,numValue2); //2-The input values are brought here inside numFunction 
return result + 50; //4- Result is brought here and returned to console.log below
}

let result =numFunction(39,3,(callbackValue1,callbackValue2)=>{ // 1-value input is taken from here
return callbackValue1 / callbackValue2 //3-The Values then come here and operation is carried out
});
console.log(result);//5- Result is printed