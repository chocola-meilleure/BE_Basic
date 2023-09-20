//Controller 역할하는 코드
"use strict";


const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res)=>{
        res.render("home/index");
    },
    login: (req,res)=>{
        res.render("home/login");
    },
};


const process = {
    login: (req,res)=>{
        const user = new User(req.body);
        const response = user.login();
        console.log(response);

        // console.log(response);
        // return res.json(response);
        // const id = req.body.id,
        // psword = req.body.psword;

        // const users = UserStorage.getUsers("id","psword");
        // console.log(UserStorage.getUsers("psword"));

        // const response = {};
        // if (users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword){
        //         response.success = true;
        //         return res.json(response);
        //      }
        // }
        
        // response.success= false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
    },
};


//hello와 login 객체를 index.js에서 사용할 수 있도록 넘겨줌
module.exports = {
    output,
    process,
};

