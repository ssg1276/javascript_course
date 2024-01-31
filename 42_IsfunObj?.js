

//function is kinf off object as well as function every thing in javascript is having object prototype and furthur null is the end
function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5)); //output-->25
console.log(multipleBy5.power);//output-->2
console.log(multipleBy5.prototype);//output-->{}

function createUser(username, score){
    this.username = username
    this.score = score
}

//injecting functionality inside the function as an object
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    //jisne bhi pucha hai uska score baata do
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/