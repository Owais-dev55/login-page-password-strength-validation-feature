"use strict";
let pass = document.querySelector("#pass");
let btn = document.querySelector("#btn");
let p1 = document.querySelector("#P1");
let p2 = document.querySelector("#P2");
btn.addEventListener("click", () => {
    const passwordValue = pass.value;
    checkPassword(passwordValue);
});
function checkPassword(pass) {
    let hasUpperCase = false;
    if (pass.length >= 8) {
        for (let i = 0; i < pass.length; i++) {
            if (pass[i] === pass[i].toUpperCase()) {
                hasUpperCase = true;
                break;
            }
        }
        if (hasUpperCase) {
            p1.innerText = "Password is strong";
            p2.innerText = "";
        }
        else {
            console.log("Password must have at least one uppercase letter");
            p1.innerText = "Password must have at least one uppercase letter";
            p2.innerText = "";
        }
    }
    else {
        console.log("Password must be at least 8 characters long");
        p1.innerText = "";
        p2.innerText = "Password must be at least 8 characters long";
    }
}
