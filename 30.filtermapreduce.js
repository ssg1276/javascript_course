const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filter basics--->filter has a callback function in it and returns the value that statisfies the condition provided with filter usage
const newNums1=myNumers.filter((num)=>num>4)
 console.log(newNums1); //single line code after the function thatswhy----> no {} or scope problem and no need to use required keyword



 //USING FOREACH INSTEAD OF FILTER
  const newNums7 = []

 myNumers.forEach( (num) => {
    if (num > 4) {
         newNums7.push(num)
     }
 } )

 console.log(newNums7);



 //accessing the array of objects with filter
 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

//MAP discusion
const newNums = myNumers.map( (num) => { return num + 10})//use of return keyword is required as we are using {}-->scope


//MAP CHAINNING METHOD
const newNums3 = myNumers
                .map((num) => num * 10 ) //returning values and giving it to next chaining step 
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums3);



//REDUCE METHOD//---->shopping cart method 
const myNums = [1, 2, 3]

 const myTotal = myNums.reduce(function (acc, currval) {
     console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval
 }, 0) //'0'-->zero here is the initial value for the accumulaator and its important to provide an initial value to accumulator 

const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);//return total amount spend