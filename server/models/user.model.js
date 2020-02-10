const database = require("../database");
const bcrypt = require("bcrypt");

// const table = "users"

async function authenticate({ nom, email, password }) {
  console.log(nom, email, password)
  var sql = `SELECT * FROM users WHERE nom = '${nom}' AND email ='${email}'`;
  return new Promise((resolve, reject) => {
    database.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        let user = results[0];
        // user.token = jwt.sign({user: username}, "chut");
        // {user: username} sera "crypté" => le decrypter dans http://jwt.io
        // 'chut' est defini dans config.json
        //console.log("YOUHOU ", user);
        resolve(user, err);
      }
    });
  });
}

function getUserByMail(clbk, mail) {
  const sql = `SELECT * FROM ${table} WHERE mail = ?`;

  database.query(sql, mail, (err, user) => {
    if (err) return clbk(err, null);
    return clbk(null, ...user);
  });
}

async function register({ nom, email, password }) {

  console.log('User registration : ', nom, email, password);
  var sql = `insert into users (nom, email, password) VALUES ('${nom}', '${email}', '${password}');`;

  var sqlUser = `SELECT * FROM users WHERE nom = '${nom}'`;

  return new Promise((resolve, reject) => {
    database.query(sqlUser, (err, results) => {
      if (!results.length) {
        database.query(sql, (err, results) => {
          if (err) reject(err);
          else {
            let user = results;
            //console.log("user created! ", user);
            resolve(user);
          }
        });
      } else reject("USER ALREADY EXIST !");
    });
  });
}

async function findUser(user, successCallback, failureCallback) {
  var sqlQuery = "SELECT * FROM users WHERE email = '" + users.email + "';";
  database.query(sqlQuery, (err, rows, fields, res) => {
    if (err) {
      failureCallback(err);
      return;
    }
    if (rows.length > 0) {
      successCallback(rows[0]);
    } else {
      failureCallback("User not found.");
    }
  });
}

async function updateUser({ nom, email, idusers }) {
  var sql = `UPDATE users SET nom='${nom}', email='${email}' WHERE idusers=${id}`;
  return new Promise((resolve, reject) => {
    database.query(sql, (err, results) => {
      if (err) {
        reject(err);
        console.log("EMAIL ALREADY EXIST");
      } else {
        let user = results;
        console.log("USER SERV ", user);
        resolve(user);
      }
    });
  });
}

const createUser = function createUser(clbk, payload) {
  const q = "INSERT INTO users (nom, email, password) VALUES (?, ?, ?)";
  const data = [payload.nom, payload.email, payload.password];

  database.query(q, data, (err, res, cols) => {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(err, null);
    return clbk(null, res);
  });
};

const deleteUser = function deleteUser(clbk, ids) {
  // ci-dessous, la clause SQL IN permet de chercher dans un tableau de valeurs
  const q = "DELETE FROM users WHERE idusers = ?";
  console.log("test");
  // alternative => boucler sur ids et query chaque id ....
  database.query(q, [ids], function(err, res, fields) {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(res, null);
    return clbk(null, res);
  });
};

const editUser = function editUser(clbk, users) {
  const q =
    "UPDATE users SET nom = ?, email = ?, password = ? WHERE idusers = ? ";
  const payload = [users.nom, users.email, users.password];
  database.query(q, payload, function(err, res, fields) {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(err, null);
    return clbk(null, res);
  });
};

async function getUser({ idusers }) {
  var sql;
  if (!idusers) sql = `SELECT * FROM users`;
  else sql = `SELECT * FROM users WHERE idusers = ${idusers}`;

  return new Promise((resolve, reject) => {
    database.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (!idusers) {
          let users = results;
          resolve(users);
        } else {
          let users = results[0];
          resolve(users);
        }
      }
    });
  });
}

async function updateUserPassword({ newPassword, idUser }) {
  var sql = `UPDATE users SET password='${newPassword}' WHERE id_user=${idUser}`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        let user = results;
        console.log("USER UPDATE PASSWORD SERV ", user);
        resolve(user);
      }
    });
  });
}

module.exports = {
  createUser,
  deleteUser,
  editUser,
  getUser,
  authenticate,
  register,
  updateUserPassword,
  getUserByMail,
  updateUser
};
