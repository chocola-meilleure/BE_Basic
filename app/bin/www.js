//app.listen()의 최적화
"use strict";

//app 모듈 불러오기
const app= require("../app");
const PORT = 3000;


//포트 연결&서버 실행
app.listen(PORT, ()=>{
    console.log("서버가 실행됩니다.");
});