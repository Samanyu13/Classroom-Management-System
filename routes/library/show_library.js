const express = require('express');

const router = express.Router();
const methods = require('../../methods');

router.get('/lended', (req, res) => {
  methods.Library.getReturnBooks()
    .then((model) => {
      res.status(200).json({
        status: 'success',
        classes: model,
      });
    })
    .catch((err) => {
      res.json({
        status: 'error',
        error: err,
      });
    });
});

router.get('/available', (req, res) => {
  methods.Library.getLendBooks()
    .then((model) => {
      res.status(200).json({
        status: 'success',
        classes: model,
      });
    })
    .catch((err) => {
      res.json({
        status: 'error',
        error: err,
      });
    });
});

module.exports = router;