//function--> helps to reduce the repeatative work-->A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). 

//declearing a function
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

//calling of a function
 sayMyName()// sayMyName--> means reference to a function ()-->exceutation for a function 

 //addition function (using console)
 //number1 and number2 are parameters here 
  function addTwoNumbers(number1, number2){
    console.log(number1 + number2); // using console will simply print not return anything  
 }
 addTwoNumbers(10,12) //it will work simply printing is happening
 const result = addTwoNumbers(3, 5) //giving 3,5 agrument
console.log("Result: ", result); //printing the result--> error undefined because function is not returning anything and therefore nothing can be store in the result variable 

//addition function (using return) 

function addTwoNumbers1(num1,num2){
    return num1+num2; //will return and not print 
}
const result1 = addTwoNumbers1(3, 5) //giving 3,5 agrument
console.log("Result: ", result1); //no error will be there now

/*********MORE ABOUT FUNCTIONS **********/
//simple form of function declaration 
function userLoginMsg(username){
    return `${username} has logged in`
}
const ans=userLoginMsg("sahil")
console.log(ans) //output-->sahil has logged in

//what if 
console.log(userLoginMsg()); //output --> undefined has logged in 

//marking this above error and updating the code
function userLoginMsg1(username){
    if(username=== undefined){ // if-block only exceute when the condition  its true
        //we can also use if(!username)--->(!)->this mark makes true into false and vica-versa
        return "please enter a valid username"
    }
    return `${username} has logged in`
}
 console.log(userLoginMsg1()); //output-->please enter a valid username

//giving default value to the parameter
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage()) //default value will be the output--> sam just logged in 
 console.log(loginUserMessage("sahil")) // it will overwrite the default value output-->sahil just logged in 

 