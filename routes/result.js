const express = require('express');

const router = express.Router();
const methods = require('../methods');

router.post('/', (req, res) => {
  const info = {};

  info.Marks = req.body.data.Marks;
  info.ExamID = req.body.data.ExamID;
  info.Remarks = req.body.data.Remarks;

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
