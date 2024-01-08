//singleton -->only forms when we develop object from constructor not from literals--->A singleton is a function or class which can have only one instance.

  //By using constructor
  Object.create //---> discussed in next lecture
 // object literals ---> way of declaring object


 //defining symbol inside the object
 const mySym=Symbol("fox1")
 const jsUser={
    name:"sahil",
    age:21,
    [mySym]:"star1",//correct way to declare a symbol inside the object without changing its datatype
    location:"jaipur",
    isLoggedIn:false,
    lastLoginDAys: ["mon","sat","sun"]
 }

 //accessing data of objects

 console.log(jsUser.name); //while using (.) dot operator for accessing no need to declare name as a string is will automatic understand

 //mth-2 for accessing data inside the object
 console.log(jsUser["name"]); //square notations

console.log(jsUser[mySym]);//method of accessing the symbol from the object

//freezing the editing and manuplation of an object
// Object.freeze(jsUser);


jsUser.greeting=function(){
    console.log("hello don");
}
jsUser.greetingTwo=function(){
    console.log(`hello ${this.name} Don`); //using object data inside the function
}
console.log(jsUser.greetingTwo());
console.log(jsUser.greeting());