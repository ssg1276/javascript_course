//for each loop

//syntax
// array.forEach(element => {
    
// });

const coding = ["js", "ruby", "java", "python", "cpp"]

//hihgh order function --->"." dot operator
//callback function is used here 

 coding.forEach( function (val){
     console.log(val);
 } )



 //using arrow function syntax
 coding.forEach( (item) => {
     console.log(item);
 } )

// callback function declaring outside 
 function printMe(item){
     console.log(item);
 }

 coding.forEach(printMe) //giving only reference

 
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


//array of object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )