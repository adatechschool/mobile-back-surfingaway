const express = require('express');
const routesArticle = express.Router();

const ArticleCtrl = require('../controllers/controllerArticle');

routesArticle.get('/', ArticleCtrl.getAllArticles);
routesArticle.post('/', ArticleCtrl.createArticle);
routesArticle.get('/:id', ArticleCtrl.getOneArticle);
routesArticle.put('/:id', ArticleCtrl.modifyArticle);

module.exports = routesArticle;