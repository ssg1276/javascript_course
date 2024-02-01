class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


//changing user sometime to teacher, admin or LMS
class Teacher extends User{
    constructor(username, email, password){
        super(username) //new shortcut use--->super keyword that take this into behind the seen
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


//making object 
const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()//its available for chai as its inheriting
const masalaChai = new User("masalaChai")

masalaChai.logMe()

//checking if some relation is there?
console.log(chai instanceof User); //---> true