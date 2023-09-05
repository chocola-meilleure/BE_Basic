//Controller 역할하는 코드
"use strict";

const output = {
    home: (req, res)=>{
        res.render("home/index");
    },
    login: (req,res)=>{
        res.render("home/login");
    },
};

const users={
    id: ["김팀장", "나경희", "박문주"],
    psw: ["1234", "050505", "0312"],
};

const process = {
    login: (req,res)=>{
        const id = req.body.id,
        psword = req.body.psword;

        if (users.id.includes(id)){
            users.id.indexOf(id);
            if (users.psword[idx] === psword){
                return res.json({
                    succuess: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인 실패",
        });
    },
};


//hello와 login 객체를 index.js에서 사용할 수 있도록 넘겨줌
module.exports = {
    output,
    process,
};