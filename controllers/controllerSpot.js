const SpotSurf = require('../models/SpotSurf');

exports.createSpot = (req, res, next) => {
  const SpotSurf = new SpotSurf({
    'Destination': req.body.Destination,
    'Destination State/Country': req.body['Destination State/Country'],
    'Photos': req.body.Photos,
    'Surfline Link': req.body['Surfline Link'],
    'Difficulty Level': req.body['Difficulty Level'],
    'Surf Break': req.body['Surf Break'],
    'Adress': req.body.Adress,
    'Geocode': req.body.Geocode,
    'Influencers': req.body.Influencers,
    'Peak Surf Season Begins': req.body['Peak Surf Season Begins'],
    'Peak Surf Season Ends': req.body['Peak Surf Season Ends'],
    'Travellers': req.body.Travellers,
    'City': req.body.City,
    'Latitude': req.body.Latitude,
    'Longitude': req.body.Longitude,
  });
  SpotSurf.save().then(
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
    () => {
      res.status(200).json({
        message: 'Spot found successfully!'
      });
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
  const SpotSurf = {
    'Destination': req.body.Destination,
    'Destination State/Country': req.body['Destination State/Country'],
    'Photos': req.body.Photos,
    'Surfline Link': req.body['Surfline Link'],
    'Difficulty Level': req.body['Difficulty Level'],
    'Surf Break': req.body['Surf Break'],
    'Adress': req.body.Adress,
    'Geocode': req.body.Geocode,
    'Influencers': req.body.Influencers,
    'Peak Surf Season Begins': req.body['Peak Surf Season Begins'],
    'Peak Surf Season Ends': req.body['Peak Surf Season Ends'],
    'Travellers': req.body.Travellers,
    'City': req.body.City,
    'Latitude': req.body.Latitude,
    'Longitude': req.body.Longitude,
  };
  SpotSurf.updateOne({ _id: req.params.id }, SpotSurf).then(
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
    (SpotSurf) => {
      res.status(200).json(SpotSurf);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
