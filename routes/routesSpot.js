const express = require('express');
const routesSpot = express.Router();

const spotCtrl = require('../controllers/controllerSpot');

routesSpot.get('/', spotCtrl.getAllSpots);
routesSpot.post('/', spotCtrl.createSpot);
routesSpot.get('/:id', spotCtrl.getOneSpot);
routesSpot.put('/:id', spotCtrl.modifySpot);

module.exports = routesSpot;