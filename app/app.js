"use strict";

//express로 서버 띄우는 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;
//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.use(express.static(`${__dirname}/src/public`))
app.set("views", "./src/views");
app.set("view engine","ejs");
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",home); 
//루트경로로오면 home속의 파일 실행해서 보여줘.
//use는 미들웨어를 등록해주는 메서드

//bin의 www.js에게 보내줄 수 있게 하는 코드
module.exports = app;