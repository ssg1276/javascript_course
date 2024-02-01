 class user{
    constructor(email,password){
        this.email=email;
        this.password = password
    }
    //getters and setters both needed
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    //getters and setters both needed
    get password(){
        return `${this._password}hitesh`//_password--->new variable that prevents the stack memory to get fully filled
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

 