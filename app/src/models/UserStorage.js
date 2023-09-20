"use strict";

class UserStorage{
    static #users={
        id: ["judi0312", "baby00", "cocojel"],
        psword: ["1234", "050505", "0312"],
        name: ["조유연","문지은","고사리"],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
    
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //[id,psword,name]이 만들어짐
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info]=users[info][idx]; //users의 key값의 index는 사용자의 id,psword 등을 나타낸다.
            return newUser;
        },{});
        
        return userInfo;
    }
}


module.exports = UserStorage;