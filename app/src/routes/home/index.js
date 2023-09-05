"use strict";

const express = require("express");
const router = express.Router();

//Controller로 넘겨져 온 login,hello 객체를 받음
const ctrl = require("./home.ctrl");

//서버에서의 루트 경로를 만들어준다(라우팅)
//사용자가 /login폴더로 가면 ctrl.login화면을 보여준다
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login",ctrl.process.login);

module.exports = router; //라우터를 외부에서 사용할 수 있게함