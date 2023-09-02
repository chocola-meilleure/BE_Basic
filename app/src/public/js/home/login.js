"use strict"
//프론트에서 작성하는 코드가 들어가는 부분

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        paword: psword.value,
    };
    console.log(req);
}
