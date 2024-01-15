//arrow function and little bit of this keyword
//this keyword-->tells us about the current context

const user = {
    username: "sahil",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //output--->current context
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

 console.log(this); // in  node environment it will give ---> {} empty object
 // but inside the window console it will give -->window object but not an empty object


 //this cant be used inside the function
 function chai(){
    let username = "hitesh"
    console.log(this.username);
 }
chai()
//this is not accessed in expression also
const chai = function () {
    let username = "hitesh"
     console.log(this.username);
 }
 chai()


 //ARROW FUNCTIONS

 //() => {} //simple syntax of an arrow function

 //storing arrow function in a variable

 //num1 and num2 are parameters
 //EXPLICIT FUNCTION--->return keyword
 const addTwo=(num1,num2)=>{
     //when {} curly braces are used return keyword is must
    return num1+num2
 }
 console.log(addTwo(3,4))//3,4 are arguments output--->7



 //IMPLICIT RETURN no use of {}-->paranthesis and return
 const addSum =(num1,num2) => num1+num2 //single line code

 //()-->simple bracket no use of return keyword
 const addSum1 =(num1,num2) => (num1+num2)
 
//for return the object we will use ({returning object})-->wrapp in paranthesis
const addsum32=()=>({
    username:"sahil"               
})