//scope defining inside the function
function one(){
    const username="sahil"

    //function two() --->as a child for function one()--->its a parent
    function two(){
        const website="youtube"
        console.log(username); //fun two() can access the variables of parent function 
    }
    console.log(website); //output -->website is not defined
   /**line by line execution thatswhy two() will not execute */
    two()
}
one()

//considering if-if statement
if (true) {
    const username = "sahil"
    if (username === "sahil") {
        const website = " youtube"
         console.log(username + website);
    }
     console.log(website); //will throw error as website is not defined and is getting accessed outside the inside if block
}

 console.log(username); //will throw error as username is outside the scope of if block

 //++++++++interesting concept and will be discussed further in the course

 //simple function--only declaration
 function addone(num){
    return num+1
 }
//can be called after or before the declaration of the function
 addone(5) //value is returned not printed

 //expression or hoisting of a function


 addTwo(5) //will throw error --->it needs to be called after the hoisting the function
const addTwo = function(num){
    return num + 2
}