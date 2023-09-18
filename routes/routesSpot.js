const express = require('express');
const routesSpot = express.Router();

const SpotCtrl = require('../controllers/controllerSpot');

router.get('/', SpotCtrl.getAllStuff);
router.post('/', SpotCtrl.createThing);
router.get('/:id', SpotCtrl.getOneThing);
router.put('/:id', SpotCtrl.modifyThing);
router.delete('/:id', SpotCtrl.deleteThing);

module.exports = routesSpot;