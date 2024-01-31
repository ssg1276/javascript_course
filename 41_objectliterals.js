//making an object 

//basic unit 
const user={
username: "sahil",
loginCount:8,
signedIn: true,

//declaring method(function) inside the object
getUserDetails: function(){
    console.log("Got user details from database");
    
    
    //this is the keyword used for instant or current context
    console.log(`Username: ${this.username}`);
    console.log(this); //return all the values and whole object ----> in current context
}
}
//printing and accessing the data inside the object
console.log(user.username);

console.log(user.getUserDetails());//calling it can't pass it as a reference without()


//value of this --> in global context --->{} empty
 console.log(this);
//but in browser it will return window object




//CONSTRUCTOR FUNCTION
const promiseOne = new Promise()
const date = new Date()
//new keyword is the constructor function helps you to make multiple instances through single object


//creating function
function User(username, loginCount, isLoggedIn){
    //same name and using this to differentiate
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    

    //implicit defined dont need to write
    return this //return the whole object value
}

const userOne1 = User("hitesh", 12, true)
const userTwo1 = User("ChaiAurCode", 11, false)
console.log(userOne1); //it will return the userTwo1 data as without using new keyword value gets overwrite




//using new--> keyword for making new instances to avoid data overwrite 
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);//gives reference to youself 
console.log(userTwo);

//read by yourself --->instanceof

//new keyword(steps)
//new empty object is created
//constructor function get called due to new keyword
//all the arguments get injected inside this keyword
//got all inside the function 