const express = require('express');

const router = express.Router();
const methods = require('../methods');

router.post('/', (req, res) => {
  const info = {};

  info.marks = req.body.data.marks;
  info.examID = req.body.data.examID;
  info.remarks = req.body.data.remarks;

  methods.Result.addResult(info)
    .then((model) => {
      res.json(model);
    })
    .catch((err) => {
      res.json({
        status: 'error',
        error: err,
      });
    });
});

router.get('/', (req, res) => {
  methods.Result.getAllResults()
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