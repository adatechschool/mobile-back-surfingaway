const mongoose = require('mongoose');

const spotSchema = mongoose.Schema({
  spotName: { type: String, required: true },
  country: { type: String, required: true },
  photos: { type: String, required: true },
  surflineLink: { type: String, required: true },
  difficulty: { type: Number, required: true },
  surfBreak: [{ type: String, required: true }],
  address: { type: String, required: false },
  geocode: { type: String, required: false },
  influencers: { type: String, required: false },
  seasonBegins: { type: String, required: true },
  seasonEnds: { type: String, required: true },
  travellers: { type: String, required: false },
  city: { type: String, required: false },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

module.exports = mongoose.model('SpotSurf', spotSchema);