//for of loop

//[" "," "," "]--->array of strings

//[{},{},{}]--->array of objects



//syntax 
// for (const iterator of object) {
    //object in this means anything except an object
// }


//using for in on an array
const arr = [1, 2, 3, 4, 5] //declaration of an array
for (const num of arr) {
    console.log(num);
    //needs no updation 
}


//using for in on string
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// using for of loop for Maps

const map = new Map() //map is itself an object {key:value}

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //it eill not enter in the mpp  as map holds only unique value


// console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
     // [key,value]--->destructuring array
}



//using for of loop on an object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 for (const [key, value] of myObject) {
    console.log(key, ':-', value); //output--->myObject is not iterable
    
 } // for-of loop cant be used with objects 