//promise --> is an object
//making an new  instance ---ES6 new version
//promise takes callback in it
const promiseOne = new Promise(function(resolve,reject){
     //Do an async tasks--->DB calls, cryptography, network
    
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() //connecting resolve with (.then)
    }, 1000)
})

//consuming the promise after holding  it in a variable
//(.then)---> has a direct relation with the resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})



//not storing the promise in a variable --->direct dealing
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()//connecting resolve with (.then)
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
}) //directly connecting (.then(having callback function in it))




//creating promise and storing it in a variable 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        //passing data through resolve
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

//consuming promise 
//as (.then) and resolve is interlinked we can access the data of the resolve by passing any parameter 
promiseThree.then(function(user){
    //user is used as a parameter to access the data inside the resolve
    console.log(user);
})


//condition and error inside the promises
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false //if its true then username will not get print
        if (!error) { //if there is no error 
            resolve({username: "hitesh", password: "123"})
        } else {
            //reject-->used to handle an error
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
//consuming the promise
const username=promiseFour
 .then((user) => {
    console.log(user);
    return user.username
})
console.log(username); //this method of priniting username will through an error and can't be declared like this

//callback hell
//chaining of(.then())
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){//handling the error through catch
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //finally will execute always 




//using async and await through promise
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//if there is an error then always use try and catch
async function consumePromiseFive(){
    try {
        //its an object so dont write promiseFive() -->like this
        const response = await promiseFive //waiting for promise to get execute
        console.log(response);
    } catch (error) { 
        console.log(error);
    }
}

consumePromiseFive() //calling the async function



//fetching all users through a link
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        //converting response into json
        const data = await response.json() //use await as it will take the time for converting
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()




//fetching through .then and .catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.