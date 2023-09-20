const SurfDestination = require('../models/surfDestination');

exports.createSpot = (req, res, next) => {
  const surfDestination = new SurfDestination({
    spotName: req.body.spotName,
    country: req.body.country,
    photos: req.body.photos,
    surflineLink: req.body.surflineLink,
    difficulty: req.body.difficulty,
    surfBreak: req.body.surfBreak,
    address: req.body.address,
    geocode: req.body.geocode,
    influencers: req.body.influencers,
    seasonBegins: req.body.seasonBegins,
    seasonEnds: req.body.seasonEnds,
    travellers: req.body.travellers,
    city: req.body.city,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  surfDestination.save().then(
    () => {
      res.status(201).json({
        message: 'Spot saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneSpot = (req, res, next) => {
  SurfDestination.findOne({
    _id: req.params.id
  }).then(
    (surfDestination) => {
      res.status(200).json(surfDestination);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifySpot = (req, res, next) => {
  const surfDestination = new SurfDestination({
    _id: req.params.id,
    spotName: req.body.spotName,
    country: req.body.country,
    photos: req.body.photos,
    surflinelink: req.body.surflineLink,
    difficulty: req.body.difficulty,
    surfBreak: req.body.surfBreak,
    address: req.body.address,
    geocode: req.body.geocode,
    influencers: req.body.influencers,
    seasonBegins: req.body.seasonBegins,
    seasonEnds: req.body.seasonEnds,
    travellers: req.body.travellers,
    city: req.body.city,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  SurfDestination.updateOne({ _id: req.params.id }, surfDestination).then(
    () => {
      res.status(201).json({
        message: 'Spot updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllSpots = (req, res, next) => {
  SurfDestination.find().then(
    (surfDestination) => {
      res.status(200).json(surfDestination);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteSpot = (req, res, next) => {
  SurfDestination.deleteOne({ _id: req.params.id }).then(
    () => {
      res.status(200).json({
        message: 'Spot deleted successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};