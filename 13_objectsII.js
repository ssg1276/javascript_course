// declaring objects using constructor

const tinderUser= new Object()  //singleton object

const tinderUser1={} //non-singleton object 

// inserting values inside the empty objects

tinderUser.id = "123abc"
tinderUser.name = "Sfasdfasdf"
tinderUser.isLoggedIn = false

console.log(tinderUser);


//declaring objects under objects---> doing nesting
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sahil",
            lastname: "singh guleria"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname); //accessing nested object's data

 //merging the objects together

 //key:numbers,value:string
 const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //by using assigning with empty object set as a target and others as a source

const obj3 = {...obj1, ...obj2} //using spread operator
// console.log(obj3);

//dealing when data is coming through databases

//array of an objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

//accessing the array of objects
users[1].email

 console.log(Object.keys(tinderUser)); //returns the array of all keys present in it and we can access them by using map etc.

 //checking if the object has any property

 console.log(tinderUser.hasOwnProperty('name'));
