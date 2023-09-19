const SpotSurf = require('../models/surfDestination');

exports.createSpot = (req, res, next) => {
  const spotSurf = new SpotSurf({
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
      res.status(200).json(
        spotSurf
      );
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
  const spotSurf = new SpotSurf ({
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
  spotSurf.updateOne({ _id: req.params.id }, spotSurf).then(
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