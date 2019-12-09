var express = require ("express");
var app = express();
var badyParser = require ("body-parser");
app.use(bodyParser.json());

require("./routers/router.js")(app)
const db = require ("./config/db.config.js");

const Role = db.role;


// force: will drop the table if it is already exist
db.sequelize.sync({force:true}).then(()=>{
 console.log('Drop and Resync with {force: true}');
 initial();
});

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})

function initial (){
    Roel.create({
        id:1,
        name:"USER",
    });
    Roel.create({
        id:2,
        name:"ADMIN",
    });
    Roel.create({
        id:3,
        name:"PM",
    });
}