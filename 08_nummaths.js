const num1=500

//dedicatly defining number datatpe

const num2=new Number(25000)
console.log(num2); // returns key value pair and also display some property on console

 console.log(num2.toString().length);
 console.log(num2.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // 123.9 around off the value

const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN')); // readability increased --->10,00,000 as an output

 /**************** Maths ***********/

 console.log(Math); // it return and object with properties
 console.log(Math.abs(-4)); // makes the value positive
 console.log(Math.round(4.6)); // output=5 roundoff
 console.log(Math.ceil(4.2));  // roundoff to 5
 console.log(Math.floor(4.9)); // roundoff to 4
 console.log(Math.min(4, 3, 6, 8)); 
 console.log(Math.max(4, 3, 6, 8));

 console.log(Math.random()); // value return from 0-1 range
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // important formula