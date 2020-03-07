const database = require("../database");

const createMission = function createMission(clbk, payload) {
    const q = "INSERT INTO mission (titre, description, date,adresse,telephone, type_prestation,users_idusers, prestataire_id ) VALUES (?, ?, ?, ?, ?, ?,?,?)";
    const data = [payload.titre, payload.description, payload.date,payload.adresse,payload.telephone, payload.type_prestation, payload.users_idusers, payload.prestataire_id];
  
    database.query(q, data, (err, res, cols) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };
  

  
  async function getMissonProposeUserToPrestataire({id}) {
    var sql ;
    if(!id) sql = `SELECT u.nom,u.email, m.titre,m.date, m.adresse, m.telephone, m.description,m.type_prestation, p.nom, p.prenom,p.tarif,p.experience,p.telephone
    FROM mission m
    INNER JOIN users u
    ON u.idusers = m.users_idusers
    INNER JOIN prestataire p
    ON p.id = m.prestataire_id`;
    else sql = `SELECT u.nom,u.email, m.titre,m.date, m.adresse, m.telephone, m.description,m.type_prestation, p.nom, p.prenom,p.tarif,p.experience,p.telephone
    FROM mission m
    INNER JOIN users u
    ON u.idusers = m.users_idusers
    INNER JOIN prestataire p
    ON p.id = m.prestataire_id= ${id}`;
  
    return new Promise((resolve, reject) => {
      database.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          if(!id) {
            let missonProposeUserToPrestataire = results;
            resolve(missonProposeUserToPrestataire);
          } else {
              let missonProposeUserToPrestataire = results;
              resolve(missonProposeUserToPrestataire); 
          }
          //console.log('service: get locations ', results)
        }
      });
    });
  }




  const deleteMission = function deleteMission(clbk, ids) {
    // ci-dessous, la clause SQL IN permet de chercher dans un tableau de valeurs
    const q = "DELETE FROM mission WHERE id IN (?)";
    // alternative => boucler sur ids et query chaque id ....
    database.query(q, [ids], function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(res, null);
      return clbk(null, res);
    });
  };
  
  const editMission = function editMission(clbk, user) {
    const q = "UPDATE mission SET titre = ?, description = ?, date = ?,adresse= ?, telephone = ?, type_prestation = ?, users_idusers = ?, prestataire_id = ?   WHERE id = ? ";
    const payload = [mission.titre, mission.description, mission.date,mission.adresse, mission.telephone,  mission.type_prestation, mission.users_idusers, mission.prestataire_id];
    database.query(q, payload, function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };
  
  

  async function getMission({id}) {
    
    var sql ;
    if(!id) sql= `SELECT * FROM mission`;
    else sql = `SELECT * FROM mission WHERE id = ${id}`;
  
    return new Promise((resolve, reject) => {
      database.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          if(!id){
  
            let mission = results;
            resolve(mission);
          } else {
            let mission = results[0];
            resolve(mission);
          }
        }
      });
    });
  }
  
  module.exports = {
    createMission,
    deleteMission,
    editMission,
    getMission,
    getMissonProposeUserToPrestataire
    

  };
  