const database = require("../database");

const table = "prestataire";

const createPrestataire = function createPrestataire(clbk, payload) {
    const q = "INSERT INTO prestataire (nom, prenom, email, password, ville, image, experience, competence, titre, tarif, telephone ) VALUES (?, ?, ?, ?,?,?, ?, ?, ?, ?, ?)";
    const data = [payload.nom, payload.prenom, payload.email, payload.password, payload.ville,payload.image, payload.experience, payload.competence, payload.titre, payload.tarif, payload.telephone];
  
    database.query(q, data, (err, res, cols) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };
  
  const deletePrestataire = function deletePrestataire(clbk, ids) {
    // ci-dessous, la clause SQL IN permet de chercher dans un tableau de valeurs
    const q = "DELETE FROM prestataire WHERE id = ?";
    // alternative => boucler sur ids et query chaque id ....
    database.query(q, [ids], function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(res, null);
      return clbk(null, res);
    });
  };
  
  const editPrestataire = function editPrestataire(clbk, user) {
    const q = "UPDATE prestataire SET nom = ?, prenom = ?, email = ?, password = ?, ville = ?, image = ?, experience = ?, competence = ?, titre = ?, tarif =?, telephone = ? WHERE id = ? ";
    const payload = [prestataire.nom, prestataire.prenom, prestataire.email, prestataire.password,prestataire.ville,prestataire.image,prestataire.experience, prestataire.competence, prestataire.titre, prestataire.tarif, prestataire.telephone];
    database.query(q, payload, function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };
  
  // function getPrestaireMissionUser(clbk, id) {
  //   const sql = `SELECT u.nom,u.email, m.titre,m.date,m.description,m.type_prestation, p.nom, p.prenom,p.tarif,p.experience,p.telephone 
  //     FROM ${mission} 
  //     inner join component 
  //     ON ${table}.component_id = component.id
  //     WHERE phone_id = ?`;
  
  //     database.query(sql, [id], (error, results) => {
  //     if (error) return clbk(error, null);
  //     return clbk(null, results);
  //   });
  
  // }


async function getPrestataire({id}) {
    
  var sql ;
  if(!id) sql= `SELECT * FROM prestataire`;
  else sql = `SELECT * FROM prestataire WHERE id = ${id}`;

  return new Promise((resolve, reject) => {
    database.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        if(!id){

          let prestataire = results;
          resolve(prestataire);
        } else {
          let prestataire = results[0];
          resolve(prestataire);
        }
      }
    });
  });
}

  module.exports = {
   
    createPrestataire,
    deletePrestataire,
    editPrestataire,
    getPrestataire
    // getPrestaireMissionUser
   

  };