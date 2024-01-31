// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

//heros array
let myHeros = ["thor", "spiderman"]

//creating an object
let heroPower = {
    thor: "hammer",
    spiderman: "sling",


    //defining method-->directly injecting a function
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//creating own method in object
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
//sibling cant have power inserted on array
myHeros.heyHitesh()//array modifn
heroPower.heyHitesh()//object returns an error


//new property hitesh() inserted inside the object and got into all others through object as it is a parent
heroPower.hitesh()
myHeros.hitesh()

 





// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //linking two objects together
}

//linking outside the scope
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//linking two objects together



let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()