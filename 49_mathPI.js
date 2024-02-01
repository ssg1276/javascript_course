//CAN WE MODIFY THE VALUE OF PI? 
//ANSWER ----> NO as writable:false enumerable:false these are hardcoded in C++ so that they cant be changed and having many checks to prevent them

const descripter = Object.getOwnPropertyDescriptor(Math, "PI") //hidden properties of an object

console.log(descripter);

console.log(Math.PI); //global constant
Math.PI = 5 //you cant overwrite
console.log(Math.PI);




//creating the above restriction on our object
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    //method inside the object
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//format of setting and restricting the properties modification for ur own object
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//iterate on the object through for-of loop

//Object.entries()-->used to iterate through object in for-of loop
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}