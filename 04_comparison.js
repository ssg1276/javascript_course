/***********normal comparison*********/
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


/******** different datatypes comparision *******/

 // console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);//false
// console.log(null == 0);//false
 // console.log(null >= 0);//true

// console.log(undefined == 0);//false
// console.log(undefined > 0);//false
// console.log(undefined < 0); //false

// == equality check do not change null into zero whereas comparision(</>) changes null as zero 

/******* use strict check to avoid the problem "==="---> it checks the value as well as its datatypes *****/

console.log("2"===2); //false