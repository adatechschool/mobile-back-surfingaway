const express = require('express');
const routesSpot = express.Router();

const SpotCtrl = require('../controllers/controllerSpot');

routesSpot.get('/', SpotCtrl.getAllStuff);
routesSpot.post('/', SpotCtrl.createThing);
routesSpot.get('/:id', SpotCtrl.getOneThing);
routesSpot.put('/:id', SpotCtrl.modifyThing);
routesSpot.delete('/:id', SpotCtrl.deleteThing);

module.exports = routesSpot;