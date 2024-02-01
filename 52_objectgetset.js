//GET SET on objects

//creating an object
const User = {
    //variable name keep in mind so that stack memory cant be fulled as name goes same
    //don not enter in race situtation
    _email: 'h@hc.com',
    _password: "abc",

    //introducing get set method
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//using factory function 
const tea = Object.create(User)//user is used as a reference to create new object
console.log(tea.email);