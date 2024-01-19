const userEmail = "sahil@gmail.com"

if (userEmail) {
    console.log("Got user email"); //this will be the output as the value is true 
} else {
    console.log("Don't have user email");
}

/******* falsy values******/ 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/******** truthy values*******/

// "0"-->its as string, 'false'--->its a string, " "-->space string, [], {}, function(){}--->empty function  



//checking whether array is empty or not
 if (userEmail.length === 0) {
     console.log("Array is empty");
 }



 //checking if an object is empty or not
const emptyObj = {}

//when keys are getting checked they will always form an array and after that you can use .length to calculate the length of the object
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//interview knowledge
false == 0 ----> will return true
false == '' ----> will return true
'' == 0 ----> will return true


// Nullish Coalescing Operator (??): works on only null and undefined


//used in databases when there you receive two values --->handling null and undefined
let val1;
 val1 = 5 ?? 10
 val1 = null ?? 10//output--->10 handling the null error
 val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // first value voiding error will be the output --->10
console.log(val1);



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")