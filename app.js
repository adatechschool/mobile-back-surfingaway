const express = require('express');
const mongoose = require('mongoose');
const routesSpot = require('./routes/routesSpot');
const routesArticle = require('./routes/routesArticle');

const app = express();

mongoose.connect("mongodb+srv://SurfTeam:123456azerty@surfingaway.lg3w7hp.mongodb.net/surfspots",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());
app.use('/spots', routesSpot);
app.use('/articles', routesArticle);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

module.exports = app;