const res = document.querySelector(".res")
const rem = document.querySelector(".rem")

const form = document.querySelector(".guess")

function randomNumber() {
    let min = 1;
    let max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min);

}

let target = randomNumber();
let number = 10;

console.log(target)
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const guessInput = document.querySelector(".guessInput")
    const num = parseInt(guessInput.value);

    if (isNaN(num)) {
        res.innerHTML = `${num} is not a Number`
    }
    else {
        number--
        if (num === target) {
            res.innerHTML = `CONGO write guess: ${num}`
            // rem.innerHTML = `Guess remaining: ${number}`
        }
        else {
            res.innerHTML = `${num} is not a correct answer`
            rem.innerHTML = `Guess remaining: ${number}`
        }

        if (number < 0) {
            res.innerHTML = `Running out of chances Plz refresh`
            rem.innerHTML = `Guess remaining: ${0}`
        }
    }


})