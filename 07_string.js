const name="sahil"
const age=21

//console.log(name+ " "+age); //old way concatenation



/****** Another way to declear string  *******/
const Name=new String('sahil singh guleria');


console.log(`hello my name is ${name} and ${Name} my age is ${age}`); // modern way of concatenation backtick and literals usage

console.log(Name.length);

//all functions are visible under web console 
 // console.log(Name.toUpperCase());
console.log(Name.charAt(2));
console.log(Name.indexOf('t'));

const newString = Name.substring(0, 4)
console.log(newString);

const anotherString = Name.slice(-8, 4)// -ve number reverse starts
console.log(anotherString);

const newStringOne = "  sahil   "
console.log(newStringOne);
console.log(newStringOne.trim()); //removes the spaces in starting as well as in ending

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))// replacing 


console.log(url.includes('sundar')) // returns False checking if the word exists

console.log(Name.split(' '));//dividing and making different string after space in between  