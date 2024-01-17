//control flow or logic flow

//"if"

const isUserLoggedin = true //"="-->assignment operator


if(true){
     //code under if scope will only get execute when the condition provided to if statement is true
}

// <,>,<=,>=,==,!=,"==="--->strict checker---> means checks datatype also , "!=="--->negative sense strict checker

const temp =41
if(temp==51){
    console.log("if runs then condition is true")
}
else{
    console.log("if condition is false then else will execute");
}

console.log("execute any way as it is outside the if-else scope");


const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`); //output-->power is not defined as power is outside the scope


//short-hand notation
const balance = 1000

//no use of {} as for the code is single lined
if (balance > 500) console.log("test");

//multiple lines can also be executed but it not a good practice as the syntax is not readable--->by using ","
if (balance > 500) console.log("test"),console.log("test1"),
console.log("test2");


//nesting if-elseif(for checking multiple conditioning)
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}


//making an account on a website
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//multiple condition checking inside "if" statement only
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

// "||"---> or operator if one is true output will be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}