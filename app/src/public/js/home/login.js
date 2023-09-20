"use strict"
//프론트에서 작성하는 코드가 들어가는 부분

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
        //then으로 서버가 보낸 res를 받는다
    })
        .then((res)=>res.json())
        .then((res)=>{
            if (res.sucess){
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err)=>{
            console.error(new Error("로그인 중 에러 발생"));
        });
}
