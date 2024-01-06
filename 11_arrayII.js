const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros) // output as array within an array

 console.log(marvel_heros);
 console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros) // concat merge both the array and return the new array type
 console.log(allHeros);


 /********* SPREAD OPERATOR USED WIDLEY *********/
const all_new_heros = [...marvel_heros, ...dc_heros] 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //returns the whole new single array 
console.log(real_another_array);



console.log(Array.isArray("sahil singh")) //checking is it an array?---> false answer
console.log(Array.from("singh")) // converting string into array
console.log(Array.from({name: "singh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//converting all into an single array