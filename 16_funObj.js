//Dealing now with functions and objects together

/*******SHOPPING CART -->not knowing how many arguments to pass int the function  *****/

//passing single value
function calculateCartPrice(num1){
    return num1
}

 console.log(calculateCartPrice(200))// no error output will be -->200

  console.log(calculateCartPrice(200, 400, 500, 2000)) //error will be there as 200 will get printed rest of them gets neglected

  //Now how the tackle this problem use "rest operator"

  function calculateCartPrice(...num1){
    return num1
}
 console.log(calculateCartPrice(200, 400, 500, 2000))// it wil return the array containing all the argument values -->[200, 400, 500, 2000]

 //ANOTHER CASE
 function calculateCartPrice(val1, val2, ...num1){
    return num1
}
 console.log(calculateCartPrice(200, 400, 500, 2000)) // output will be num1=[500,2000] "val1" will take 200 and "val2" will take 400

 //DEALING WITH OBJECTS NOW
 //accessing the elements of object "syntax needs to be checked "
 const user = {
    username: "sahil",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
 
//calling function with user argument
 handleObject(user) //output-->Username is sahil and price is 199

 //Directly passing the object
 handleObject({
    username: "sam",
    prices: 399
})//output-->Username is sam and price is undefined

/*******NOW PASSING ARRAY */

const array=[100,200,300]

function arrayData(getArray){
    return getArray[1];
}
console.log(arrayData(array)); //output-->200