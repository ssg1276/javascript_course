//for-in loop

//syntax 
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

 
for (const key in myObject) {

    console.log(`${key} shortcut is for ${myObject[key]}`); //output--->all will be printed 
}



//forin loop for an array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key); // output--> 0,1,2,3,4
    console.log(programming[key]); //output-->js,rb,py,java,cpp
}


//maps are not iteratable therefore forin cant be used to iterate the map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); //output-->nothing
}