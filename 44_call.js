function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
//SetUsername(username)--->it cant be called and only reference it is


    //how to call it inside the other function using this --->taking current context--->(.call)--->holding the reference
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);