const mongoose = require('mongoose');

const SpotSchema = mongoose.Schema({
  'Destination': { type: String, required: true },
  'Destination State/Country': { type: String, required: true },
  'Photos': { type: String, required: true },
  'Surfline Link': { type: String, required: true },
  'Difficulty Level': { type: Number, required: true },
  'Surf Break' : { type: String, required: true },
  'Adress' : { type: String, required: true },
  'Geocode' : { type: String, required: true },
  'Influencers' : { type: String, required: true },
  'Peak Surf Season Begins' : { type: String, required: true },
  'Peak Surf Season Ends' : { type: String, required: true },
  'Travellers' : { type: String, required: true },
  'City' : { type: String, required: true },
  'Latitude' : { type: Number, required: true },
  'Longitude' : { type: Number, required: true },
});

module.exports = mongoose.model('SpotSurf', SpotSchema);