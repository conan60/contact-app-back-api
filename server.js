const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/contactRoute');


const app = express();



const mongodbUrl = 'mongodb://localhost:27017/contact';

mongoose.connect(mongodbUrl,{ useNewUrlParser: true,useFindAndModify: false  },(err)=>{
    if (err) {
        console.log('Error to connect to database !!')
    } else {
        console.log('Connecting to database with success')
    }
});




app.use('/',routes);



app.listen(3030, (err) => {
    if(err) console.log('Une erreur se produit lors du lancement de serveur !!')
    else console.log('Server run on port 3030 !!')
})

