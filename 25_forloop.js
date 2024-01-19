//basic structure ---> loops=iterations 

// for loop(iteration)

//{}-->block scope initiated
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//no access outside the scope
console.log(i); //output-->i is not defined


//nested for loop -->remember to use different variables here
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    //printing tables
    console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

//Now working on array

let myArray = ["flash", "batman", "superman"]

console.log(myArray.length); //output-->3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break Keyword

 for (let index = 1; index <= 20; index++) {
     if (index == 5) {
         console.log(`Detected 5`);
         break; //output-->jumps out of the for loop scope
     }
    console.log(`Value of i is ${index}`);
    
 }


 // continue keyword
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; //output-->  helps to skips the condition once
    }
   console.log(`Value of i is ${index}`);
    
}