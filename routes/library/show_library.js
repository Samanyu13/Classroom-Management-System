const express = require('express');

const router = express.Router();
const methods = require('../../methods');

router.get('/', (req, res) => {
    methods.Library.getAllLibrary()
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