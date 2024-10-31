// Create web server
// Create a new comment
// Read all comments
// Read a comment by id
// Update a comment
// Delete a comment
// Export the module

const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Create a new comment
router.post('/comments', (req, res) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Read all comments
router.get('/comments', (req, res) => {
  Comment.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Read a comment by id
router.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  Comment.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Update a comment
router.patch('/comments/:id', (req, res) => {
  const id = req.params.id;
  Comment.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Delete a comment
router.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  Comment.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;