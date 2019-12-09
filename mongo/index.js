const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log('Connected to MongoDB'))
.catch(err =>console.error('Could not connet to MongoDB', err))

const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email:String,
    password:String,
    telephone: Number,
    ville: String,
    tags:[String],
  
});

const User = mongoose.model('User',userSchema);

 async function createUser() {
    
    const user = new User({
        nom:'Litete',
        prenom:'Joel',
        email:'lilolitete@gmail.com',
        password:'@isadmin',
        telephone: '0771456906',
        ville: 'Paris',
        tags:['admin','user1'],
      
  });
    
    const result = await user.save();
    console.log(result);
}
createUser();