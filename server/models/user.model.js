module.exports =(sequelize, Sequelize)=>{
    const User = sequelize.define('user', {
        name:{
            type: sequelize.STRING
        },
        username:{
            type: sequelize.STRING
        },
        email:{
            type: sequelize.STRING
        },
        password:{
            type: sequelize.STRING
        }
    });
    return User;
}