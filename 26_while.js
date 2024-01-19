//do-while and while

//syntax

while(condition){
    //statement under this block will execute when the condition is true
}

let index = 0 // initialization of the loop
 while (index <= 10) //condition checking
  {
    console.log(`Value of index is ${index}`);
     index = index + 2; //updation of while loop
 }


 //working on array now  
let myArray = ['flash', "batman", "superman"] // declaration of an array

let arr = 0 //initializing the array for while loop
while (arr < myArray.length) //conditin checking for termination
 {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1; //updating while loop
}



//Now do-while loop
let score = 11

//do-while loop --> will work atleast once even if the condition is false as the condition is checked at the end
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);