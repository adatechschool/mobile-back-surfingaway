const SpotSurf = require('../models/spotSurf');

exports.createSpot = (req, res, next) => {
  const spotSurf = new SpotSurf({
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
  spotSurf.save().then(
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
  SpotSurf.findOne({
    _id: req.params.id
  }).then(
    (spotSurf) => {
      res.status(200).json(spotSurf);
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
  const spotSurf = new SpotSurf({
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
  SpotSurf.updateOne({ _id: req.params.id }, spotSurf).then(
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
  SpotSurf.find().then(
    (spotSurf) => {
      res.status(200).json(spotSurf);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};