const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  photo: { type: String, required: false },
  date: { type: String, required: true },
  description: { type: String, required: false },
  keywords: [{ type: String, required: false }],
  content: { type: String, required: true },
});

module.exports = mongoose.model('articles', ArticleSchema);