const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const productsRoutes = require('./routes/routesProducts');

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:11111111David@ds215961.mlab.com:15961/refrielectricos',{
}).then(()=>{
    console.log("Conectado a la base de datos");
}).catch((err)=>{
    console.log("Error al conectarse a la base de datos");
});

// Settings
app.set('port',process.env.PORT || 3000);

// Middle wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.get('*',function(req,res){
//     res.sendFile(path.join(__dirname,'Serve/dist'))
// })
// Routes
app.use('/api',productsRoutes);

// Static files
app.use(express.static(path.join(__dirname,'dist')));

// Start server
app.listen(app.get('port'),()=>{
    console.log("Server on port",app.get('port'));
});
