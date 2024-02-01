// after ES6-->syntactic sugar it is 


class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene
//function is created first
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

//injecting properties inside the user
//method-1
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
//method-2
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

//same usecase
const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());