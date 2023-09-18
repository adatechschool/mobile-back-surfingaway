const express = require('express');
const routesSpot = express.Router();

const SpotCtrl = require('../controllers/controllerSpot');

routesSpot.get('/', SpotCtrl.getAllSpots);
routesSpot.post('/', SpotCtrl.createSpot);
routesSpot.get('/:id', SpotCtrl.getOneSpot);
routesSpot.put('/:id', SpotCtrl.modifySpot);

module.exports = routesSpot;