module.exports =(sequelize, Sequelize)=>{
    const Role = sequelize.define('roles', {
        id:{
            type: sequelize.INTEGER,
            primarykey: true
        },
        name:{
            type: sequelize.STRING
        }
        
    });
    return Role;
}