const button = document.querySelectorAll(".item")
const body = document.querySelector("body")

button.forEach(function (but) {
    but.addEventListener("click", (e) => {
        if (e.target.id === "grey") {
            body.style.backgroundColor = "grey";
        }
        else if (e.target.id === "green") {
            body.style.backgroundColor = "green";
        }

        else if (e.target.id === "yellow") {
            body.style.backgroundColor = "yellow";
        }
        else if (e.target.id === "red") {
            body.style.backgroundColor = "red";
        }
    })

})