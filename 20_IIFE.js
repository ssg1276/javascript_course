//Immediately Invoked Function Expressions (IIFE) --->executing function immediately after writing (used if file is having only databases)

//problem gets generated by global scope variables and to remove that we use IIFE.

//all about syntax

//named IIFE
(function chai(){
    console.log("hello world")
})(); // ";"-->must be used to end the ongoing function otherwise n function after this will work

(()=>{
    console.log("jai ho");
})(); //arrow function can also be declared in IIFE

//passing argument and parameter inside IIFE --> same as simple function

((name)=>{
 console.log(`${name}`);
})('sahil singh') // name-->parameter and sahil singh --->argument