"use strict";

//express로 서버 띄우는 모듈
const express = require("express");
const app = express();

const PORT = 3000;
//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.use(express.static(`${__dirname}/src/public`))
app.set("views", "./src/views");
app.set("view engine","ejs");

app.use("/",home); 
//루트경로로오면 home속의 파일 실행해서 보여줘.
//use는 미들웨어를 등록해주는 메서드

//bin의 www.js에게 보내줄 수 있게 하는 코드
module.exports = app;