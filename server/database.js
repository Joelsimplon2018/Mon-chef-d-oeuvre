
const mysql = require('mysql');



var connection = mysql.createConnection({
    host        : 'locatlhost',
    user        : 'root',
    password : 'root',
    database : 'MonProjet_Ecole',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'

});
connection.connect(); // le serveur node est connecté au serveur mysql (BDD)

 const end = function end() {
   connection.end(); 
 };





const test = function test() {
    // fonction de test pour vérifier la bonne connection
    const sql = 'SELECT 1 + 1 AS solution';
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
  };


  // USERS


 const createUser = function createUser(clbk, payload) {
    const q = "INSERT INTO users (nom, prenom, email, password, telephone, ville) VALUES (?, ?, ?, ?,?,?)";
    const data = [payload.nom, payload.prenom, payload.email, payload.password, payload.telephone, payload.ville];
 
    connection.query(q, data, (err, res, cols) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  


  const deleteUser = function deleteUser(clbk, ids) {
    // ci-dessous, la clause SQL IN permet de chercher dans un tableau de valeurs
    const q = "DELETE FROM users WHERE idusers = ?";
    console.log("test")
    // alternative => boucler sur ids et query chaque id ....
    connection.query(q, [ids], function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(res, null);
      return clbk(null, res);
    });
  };

  

  const editUser = function editUser(clbk, users) {
    const q = "UPDATE users SET nom = ?, prenom = ?, email = ?, password = ?, telephone = ?, ville = ? WHERE idusers = ? ";
    const payload = [users.nom, users.prenom, users.email, users.password,users.telephone, users.ville];
    connection.query(q, payload, function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };


  const getUser = function getUser(clbk, id) {
    var sql;
  
    if (id) {
      sql = "SELECT * FROM users WHERE idusers = ?";
    } else {
      sql = "SELECT * FROM users";
    }
  
    connection.query(sql, [id], (error, results, fields) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (error) return clbk(error, null);
      return clbk(null, results);
    });
  };

  

//PRESTATAIRE

 
const createPrestataire = function createPrestataire(clbk, payload) {
  const q = "INSERT INTO prestataire (nom, prenom, email, password, ville, image, experience, competence, titre, tarif, telephone ) VALUES (?, ?, ?, ?,?,?, ?, ?, ?, ?, ?)";
  const data = [payload.nom, payload.prenom, payload.email, payload.password, payload.ville,payload.image, payload.experience, payload.competence, payload.titre, payload.tarif, payload.telephone];

  connection.query(q, data, (err, res, cols) => {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(err, null);
    return clbk(null, res);
  });
};

const deletePrestataire = function deletePrestataire(clbk, ids) {
  // ci-dessous, la clause SQL IN permet de chercher dans un tableau de valeurs
  const q = "DELETE FROM prestataire WHERE id = ?";
  // alternative => boucler sur ids et query chaque id ....
  connection.query(q, [ids], function (err, res, fields) {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(res, null);
    return clbk(null, res);
  });
};

const editPrestataire = function editPrestataire(clbk, user) {
  const q = "UPDATE prestataire SET nom = ?, prenom = ?, email = ?, password = ?, ville = ?, image = ?, experience = ?, competence = ?, titre = ?, tarif =?, telephone = ? WHERE id = ? ";
  const payload = [prestataire.nom, prestataire.prenom, prestataire.email, prestataire.password,prestataire.ville,prestataire.image,prestataire.experience, prestataire.competence, prestataire.titre, prestataire.tarif, prestataire.telephone];
  connection.query(q, payload, function (err, res, fields) {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(err, null);
    return clbk(null, res);
  });
};


const getPrestataire = function getPrestataire(clbk, id) {
  var sql;

  if (id) {
    sql = "SELECT * FROM prestataire WHERE id = ?";
  } else {
    sql = "SELECT * FROM prestataire";
  }

  connection.query(sql, [id], (error, results, fields) => {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (error) return clbk(error, null);
    return clbk(null, results);
  });
};




// MISSION




 
const createMission = function createMission(clbk, payload) {
  const q = "INSERT INTO mission (titre, description, date, type_prestation,users_idusers, prestataire_id ) VALUES (?, ?, ?, ?, ?, ?)";
  const data = [payload.titre, payload.description, payload.date, payload.type_prestation, payload.users_idusers, payload.prestataire_id];

  connection.query(q, data, (err, res, cols) => {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(err, null);
    return clbk(null, res);
  });
};

const deleteMission = function deleteMission(clbk, ids) {
  // ci-dessous, la clause SQL IN permet de chercher dans un tableau de valeurs
  const q = "DELETE FROM mission WHERE id IN (?)";
  // alternative => boucler sur ids et query chaque id ....
  connection.query(q, [ids], function (err, res, fields) {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(res, null);
    return clbk(null, res);
  });
};

const editMission = function editMission(clbk, user) {
  const q = "UPDATE mission SET titre = ?, description = ?, date = ?, type_prestation = ?, users_idusers = ?, prestataire_id = ?   WHERE id = ? ";
  const payload = [mission.titre, mission.description, mission.date, mission.type_prestation, mission.users_idusers, mission.prestataire_id];
  connection.query(q, payload, function (err, res, fields) {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(err, null);
    return clbk(null, res);
  });
};


const getMission = function getMission(clbk, id) {
  var sql;

  if (id) {
    sql = "SELECT * FROM mission WHERE id = ?";
  } else {
    sql = "SELECT * FROM mission";
  }

  connection.query(sql, [id], (error, results, fields) => {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (error) return clbk(error, null);
    return clbk(null, results);
  });
};



// app.get("/users/", (req, res) => {

 
//     connection.query('SELECT * FROM users', (err, rows, fields) => {
//         if(!err)
//         res.send(rows);
//         else
//         console.log(err);

//     })
// });


module.exports = {
    createUser,
    createPrestataire,
    createMission,
    deleteUser,
    deletePrestataire,
    deleteMission,
    editUser,
    editPrestataire,
    editMission,
    getUser,
    getPrestataire,
    getMission,
    end,
    test

  };
