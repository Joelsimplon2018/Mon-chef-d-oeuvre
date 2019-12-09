const db = require("../config/db.config.js");
const config = require ("../config/index.js");
const ROLEs = config.ROLEs;
const User = db.user;

checkDuplicateUserNameOrEmail = (req, res, next)=>{
    User.findOne({
        where :{
            username:req.body.username
        }
    }).then(user =>{
        if(user){
            res.status(400).send("Fail -> username is already taken!");
            return;
        }


        User.findOne({
            where :{
                email:req.body.email
            }
        }).then(user =>{
            if(user){
                res.status(400).send("Fail -> Email is already in use!");
                return;
            }
            next();
        });
    });
}

checkRolesExisted = (req, res, next) =>{
    for (let i = 0; i < req.body.roles.length; i++ ){
        if(!ROLES.includes(req.body.roles[i].toUpperCase())){
            res.status(400).send("Fail -> does NOT exist Role = " + req.body.roles[i]);
            return;
        }
    }
    next();

}

const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;
signUpVerify.checkRolesExisted = checkRolesExisted;

module.exports = signUpVerify;