const mongoose = require('mongoose');

const Article = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String },
  contents: [{ type: String, required: true,}],
  tags: [{ type: String }],
  },
  { collection: 'article' },
);

const model = mongoose.model('ArticleData', Article);
module.exports = model;