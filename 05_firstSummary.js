//  Primitive---> call by value

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false // boolean type
const outsideTemp = null // null type
let userEmail; //undefined type

const id=Symbol('abc')
const anotherId = Symbol('123')

//console.log(id === anotherId);// always False
//console.log(id);




 // Non- Primitive ---> call by reference
 // Array, Objects, Functions
 
 const array = ["abc", "asdas"];

 const Objects={
    name:"sahil",
    age:21,
 }

 const fun=function(){
    console.log("hello World");
 }
