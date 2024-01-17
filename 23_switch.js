//switch-case statements


//syntax
 switch (key) {
     case value:
        
         break;

     default:

        break;
 }

const month = "march"

switch (month) {
    case "jan": //checking month is march or not
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march": // checked and hence it break and will jump out of the statement
        console.log("march"); 
        break;
    case "april":
        console.log("april");
        break;

    default: //it will execute when no case is matched
        console.log("default case match");
        break;
}


//break ---> if it is not present then after the matched case all the other cases will be executed and default will not execute