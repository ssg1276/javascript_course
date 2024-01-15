const accId = 962265  //can't be changed 
let accEmail = "guleriasahil@gmail.com" // mainly in use nowadays
var accPass="12345" // not in use because of scope problem
accCity="kangra" // string type

// console.log(typeof accCity);


 
let accState; // its undefined now 
// console.log(accState);

/*  mutli-line comment
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accId,accPass,accEmail,accCity]); // printing in tabular form better the console log for printing multiple values