//Scope is defined for let, const, var

let a1=10
const b1=20
var c1=30 

console.log(a1);
console.log(b1);
console.log(c1);

//no problem in above

// {} --> scope dont confuse it with object declaration 

//defining scope using if statement

//block scoping
if(true){
    let a=10
    const b=20
    var c=30 
    console.log("INNER:",a) //output INNER: 10
}

//a,b,c defined inside the scope and should not have any impact outside the scope

/*******MAIN PROBLEM WITH "VAR" ARAISE ****/

console.log(a); // output --->a is not defined
console.log(b);// output --->b is not defined
console.log(c); // output c=30 ---> main problem 

//declaring var c=300 outside the scope will create problem 

let a=300; //global scope
console.log("global:",a) // output---> global: 300

//global scope in window's console is different then node global scope

