const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "MonProjet_Ecole",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect();

(function test() {
    try {
        connection.query('SELECT 1 + 1 AS solution', function (error) {
            if (error) throw error;
            console.log("===== yay !!! succesfully connected to mysql server =====");
        });
    } catch(err) {
        console.error(err);
    }
}());

const close = function close() {
    connection.end();
};

module.exports = {
    close,
    connection
}

