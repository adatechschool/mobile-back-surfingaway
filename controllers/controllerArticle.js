const Article = require('../models/articles');

exports.createArticle = (req, res, next) => {
  const articlePost = new Article({
    title: req.body.title,
    author: req.body.author,
    photo: req.body.photo,
    date: req.body.date,
    description: req.body.description,
    keywords: req.body.keywords,
    content: req.body.content,
  });
  articlePost.save().then(
    () => {
      res.status(201).json({
        message: 'Article saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: 'Failed to save article. Please check your input data.'
      });
    }
  );
};

exports.getOneArticle = (req, res, next) => {
  Article.findOne({
    _id: req.params.id
  }).then(
    (articlePost) => {
      res.status(200).json(
        articlePost
      );
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: 'Article not found.'
      });
    }
  );
};

exports.modifyArticle = (req, res, next) => {
  const articlePost = new Article({
    title: req.body.title,
    author: req.body.author,
    photo: req.body.photo,
    date: req.body.date,
    description: req.body.description,
    keywords: req.body.keywords,
    content: req.body.content,
  });
  articlePost.updateOne({ _id: req.params.id }, articlePost).then(
    () => {
      res.status(201).json({
        message: 'Article updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: 'Failed to update article. Please check your input data.'
      });
    }
  );
};

exports.getAllArticles = (req, res, next) => {
  Article.find().then(
    (articlePost) => {
      res.status(200).json(articlePost);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: 'Internal server error.'
      });
    }
  );
};