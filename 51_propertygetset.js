
//earlier way of setting getters and setters
function User(email, password){
    this._email = email;
    this._password = password
    

    //through method and object allows itself through defineProperty
    Object.defineProperty(this, 'email', {//overwritting email and passing this 
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

//making new instance and storing it in object
const chai = new User("chai@chai.com", "chai")

//printing
console.log(chai.email);