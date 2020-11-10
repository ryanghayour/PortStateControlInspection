const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');
const db = require('./util/admin');
// const cors = require('cors');
// app.use(cors());

const { 
    getAllShips, 
    postShip, 
    deleteShip 
} = require('./handlers/ships');

const { 
    signup, 
    login, 
    addUserDetails 
} = require('./handlers/users');

// Ship routes
app.get('/ships', getAllShips);
app.post('/ship', FBAuth, postShip);
app.delete('/ship/:shipId', FBAuth, deleteShip);

//user routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user', FBAuth, addUserDetails);

exports.api = functions.https.onRequest(app);
