const database = require("./database");
// database.test();
const express = require("express");
const api = express.Router();
const app = express();
const path = require('path');
const multer= require("multer");

const cors= require('cors');
const bcrypt = require("bcrypt");
const fs = require("fs");
const port = 3306;
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');



require("rootpath")();


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const auth = express.Router();


auth.post('/connexion', (req, res)=>{
  if(req.body) {
    const email = req.body.email.toLocaleLowerCase();
    const password = req.body.password.toLocaleLowerCase();
    const index = users.findIndex(user => user.email === email);
    console.log('index ', index);
    console.log('user ', users[index]);
    if(index > -1 && users[index].password === password) {
      let user = users[index]; 
      let token = '';
      if(user.email === 'tu@test.fr') {
        token = jwt.sign({ iss: 'http://localhost:3306', role: 'admin', email: req.body.email, nickname: user.nickname}, secret);
      } else {
        token = jwt.sign({ iss: 'http://localhost:3306', role: 'user', email: req.body.email, nickname: user.nickname}, secret);
      }
      res.json({ success: true, token: token});
    } else {
      res.status(401).json({ success: false, message : 'identifiants incorrects' });
    }
  } else {
    res.status(500).json({ success: false, message: 'données manquantes'});
  }
})

app.use('/api', api);
app.use('/auth', auth);

app.use(express.json({ extended: false })); // to support JSON-encoded bodies
// app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies
// app.use(express.multipart({ extended: true }));       // NEED DEPENDENCIE -> to support JSON-encoded bodies





app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));



// USERS




// CONFIGURATION D'UNE ROUTE ( http://localhost:${port}/user )
app.post('/users', (req, res) => {
  // UTILISATION DU MODELE



  database.createUser((err, info) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(info);

  }, req.body); // post datas ici ...
});

// CONFIGURATION D'UNE NOUVELLE ROUTE
app.get('/users/:idusers', (req, res) => {
    // UTILISATION DU MODELE
  database.getUser( (err, dataset) => {
    res.send(dataset[0]);
  }, req.params.id); // extrait l'id de la route demandée : )
});

// IDEM ...
app.get('/users', (req, res) => {
  database.getUser( (err, users) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(users);
  }, null);
});


app.post("/users", (req, res) => {
  const { nom, email, password } = req.body.data;
  const newUser = { email, nom };

  bcrypt.hash(password, 10).then(hash => {
    newUser.password = hash;
    userModel.create(function (err, result) {
      if (err) return res.status(520).send(err);
      return res.status(201).send(result);
    }, newUser);
  }).catch(err => {
    return res.status(500).send(err);
  });
});

// ETC ...
app.delete('/users/:idusers', (req, res) => {
   //console.log("laaaaaaa");
 console.log(req.params.idusers);
  // return;
  database.deleteUser((err, dataset) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(dataset);
  }, req.params.idusers); // tableau d'ids ici ...
});


app.patch('/users', (req, res) => {
  database.editUser((err, dataset) => {
    if (err) return res.status(500).send(err);
    else return res.status(200).send(dataset);
  }, req.body); // tableau d'ids ici ...
});


app.post("/users/login", (req, res) => {
  // on récupère l'user par son mail
  userModel.getByMail((err, user) => {

    // si erreur interne au serveur, retourner l'erreur au client
    if (err) return res.status(500).send(err);
    // sinon si le mail n'existe pas en bdd, retourner une erreur au client
    else if (!user) return res.status(401).send("unknown mail");

    // sinon  le mail a été trouvé, comparer le password avec son crypt/salt
    bcrypt.compare(req.body.user.password, user.password).then(function(match) {
      // si le password est invalide, retourner une erreur au client
      if (!match) return res.status(401).send("login failed"); 
  
      // tout est ok => retourner l'objet user (sans password, etc.) au client
      // accompagné d'un token dans l'entête HTTP pour sécuriser l'accès au dashboard.

      user = auth.removeSensitiveInfo(user);
      const token = auth.createToken(user, req.ip);
      return res.header("x-authenticate", token).status(200).send({user, token});

    }).catch(err => {
      console.log("@catch", err)
      res.status(500).send(err);
    }); // si bcrypt a planté, => erreur au client

  }, req.params.users.email);
});




// PRESTATAIRE  



app.post('/prestataire',  (req, res) => {
   console.log(req.file);
    // UTILISATION DU MODELE
    database.createPrestataire((err, info) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(info);
  
    }, req.body); // post datas ici ...
  });
  
  // CONFIGURATION D'UNE NOUVELLE ROUTE
  app.get('/prestataire/:id', (req, res) => {
      // UTILISATION DU MODELE
    database.getPrestataire( (err, dataset) => {
      res.send(dataset[0]);
    }, req.params.id); // extrait l'id de la route demandée : )
  });
  
  // IDEM ...
  app.get('/prestataire', (req, res) => {
    database.getPrestataire( (err, users) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(users);
    }, null);
  });
  
  // ETC ...
  app.delete('/prestataire/:id', (req, res) => {
    //console.log("laaaaaaa");
  console.log(req.params.id);
   // return;
   database.deletePrestataire((err, dataset) => {
     if (err) return res.status(500).send(err);
     return res.status(200).send(dataset);
   }, req.params.id); // tableau d'ids ici ...
 });
  
  app.patch('/prestataire', (req, res) => {
    database.editPrestataire((err, dataset) => {
      if (err) return res.status(500).send(err);
      else return res.status(200).send(dataset);
    }, req.body); // tableau d'ids ici ...
  });
  



// MISSION




app.post('/mission', (req, res) => {
  // UTILISATION DU MODELE
  database.createMission((err, info) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(info);

  }, req.body); // post datas ici ...
});

// CONFIGURATION D'UNE NOUVELLE ROUTE
app.get('/mission/:id', (req, res) => {
    // UTILISATION DU MODELE
  database.getMission( (err, dataset) => {
    res.send(dataset[0]);
  }, req.params.id); // extrait l'id de la route demandée : )
});

// IDEM ...
app.get('/mission', (req, res) => {
  database.getMission( (err, mission) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(mission);
  }, null);
});

// ETC ...
app.delete('/mission/:id', (req, res) => {
  //console.log("laaaaaaa");
console.log(req.params.id);
 // return;
 database.deleteMission((err, dataset) => {
   if (err) return res.status(500).send(err);
   return res.status(200).send(dataset);
 }, req.params.id); // tableau d'ids ici ...
});

app.patch('/mission', (req, res) => {
  database.editMission((err, dataset) => {
    if (err) return res.status(500).send(err);
    else return res.status(200).send(dataset);
  }, req.body); // tableau d'ids ici ...
});


// let directory = "../src/assets/image/imgProfile/";
// let dirBuf = Buffer.from(directory);
// let files = fs.readdirSync(directory);
// console.log(files);


const storage = multer.diskStorage({
  destination: "../src/assets/image/imgProfile/",
  filename: function(req, file, cb){
    // cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname)); //pour renommer le fichier
    cb(null, "shootpic-"+path.basename(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
}).single("myImage");

app.post('/upload',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

});








// NOTRE APPLICATION EXPRESS ECOUTE SUR LE PORT HTTP DEFINIT EN DEBUT DE FICHIER
app.listen(port, () => {
  console.log('Example app listening on port ' + port);
});