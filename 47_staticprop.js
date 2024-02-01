

//creating a user class
class User {
    constructor(username){
        this.username = username
    }

    //injecting method
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    //unique id getting to new user
    //static--->used for disabling the access of any method to other users
    static createId(){
        return `123`
    }
}

//creating an instance and storing it in an object
const hitesh = new User("hitesh")
console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){//parameters order doesn;t matter
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()//it can be accessed as there is no static keyword
console.log(iphone.createId());//access denied as there is a use of static which stops access to any other child or parent