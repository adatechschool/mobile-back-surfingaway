const mongoose = require('mongoose');

const SpotSchema = mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  spotId: { type: String, required: true },
  difficulty: { type: Number, required: true },
  surfBreak : { type: String, required: true },
});

module.exports = mongoose.model('SpotSurf', SpotSchema);