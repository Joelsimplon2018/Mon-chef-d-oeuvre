const db = require("../config/db.config.js");
const config = require ("../config/index.js");
const Role = db.role;
const User = db.user;

const Op = db.Sequilize.Op;
var jwt = require('jsonwebtoken');
var bcrypt = require ('bcryptjs');


exports.signup = (req, res)=>{
   console.log("Processing func -> signUp");

   User.create({
       name: req.body.name,
       username:req.body.username,
       email: req.body.email,
       password: bcrypt.hashSync(req.body.password, 8)
   }).then(user=>{
       Role.findAll({
           where:{
               name: {
                   [Op.or]: req.body.roles
               }
           }
       }).then(roles =>{
           user.setRoles(roles).then(()=>{
               res.send("User registered successfully!");
           });
       }).catch(err =>{
           res.status(500).send('Err -> ' + err);
       });
   }).catch(err =>{
    res.status(500).send('Fail ! Error -> ' + err);
})

}

exports.signin = (req, res)=>{
    console.log("Sign-In");

    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(user =>{
        if(!user){
            return res.status(404).send("User not Found");
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid){
            return res.status(401).send({auth : false, accessToken:null,reason:"Invalid password!"})
        }

        var token = jwt.sign({id: user.id}, config.secreet, {
            expiresIn: 86400
        });
        res.status(200).send({auth:true, accessToken: token});
    }).catch(err =>{
        res.status(500).send("Error ->" + err );
    });
}

exports.userContent =(req, res)=>{
    User.findOne({
        where:{id: req.body.userId},
        attributes:['name', 'username','email'],
        include:[{
            modele: Role,
            attributes:['id', 'name'],
            through:{
                attributes:['userId', 'roleId'],
            }

        }]
    }).then(user =>{
        res.status(200).json({
            "description":"User Content Page",
            "user": user
        });

    }).catch(err =>{
        res.status(500).json({
            "description":"Can not access User  Page",
            "err": err
        })
    })
}




exports.adminBoard =(req, res)=>{
    User.findOne({
        where:{id: req.body.userId},
        attributes:['name', 'username','email'],
        include:[{
            modele: Role,
            attributes:['id', 'name'],
            through:{
                attributes:['userId', 'roleId'],
            }

        }]
    }).then(user =>{
        res.status(200).json({
            "description":"Admin Board",
            "user": user
        });

    }).catch(err =>{
        res.status(500).json({
            "description":"Can not access admin Board",
            "err": err
        })
    })
}



exports.managementBoard =(req, res)=>{
    User.findOne({
        where:{id: req.body.userId},
        attributes:['name', 'username','email'],
        include:[{
            modele: Role,
            attributes:['id', 'name'],
            through:{
                attributes:['userId', 'roleId'],
            }

        }]
    }).then(user =>{
        res.status(200).json({
            "description":"Management Board",
            "user": user
        });

    }).catch(err =>{
        res.status(500).json({
            "description":"Can not access Management Board",
            "err": err
        })
    })
}