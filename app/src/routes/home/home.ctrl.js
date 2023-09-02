//Controller 역할하는 코드
"use strict";

const home = (req, res)=>{
    res.render("home/index");
};

const login = (req,res)=>{
    res.render("home/login");
}

//hello와 login 객체를 index.js에서 사용할 수 있도록 넘겨줌
module.exports = {
    home,
    login,
};