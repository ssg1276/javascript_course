const btn = document.querySelector("form");

btn.addEventListener("submit", function (e) {
    console.log("Form submitted");
    e.preventDefault();

    const h = parseInt(document.querySelector("#height").value);
    const w = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    console.log("Height:", h);
    console.log("Weight:", w);

    if (h < 0 || h === " " || isNaN(h)) {
        result.innerHTML = `please enter a valid height: ${h}`;
    } else if (w < 0 || w === " " || isNaN(w)) {
        result.innerHTML = `please enter a valid weight: ${w}`;
    } else {
        const BMI = (w / ((h + h) / 10000)).toFixed(2);
        console.log("BMI:", BMI);

        if (BMI <= 18.6) {
            result.innerHTML = `Under Weight ${BMI}`;
            console.log(result.innerHTML);
        } else if (BMI > 18.6 && BMI <= 24.9) {
            result.innerHTML = `Normal ${BMI}`;
            console.log(result.innerHTML);
        } else {
            result.innerHTML = `Overweight ${BMI}`;
            console.log(result.innerHTML);
        }
    }
});
