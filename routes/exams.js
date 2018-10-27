const express = require('express');

const router = express.Router();
const methods = require('../methods');

router.get('/', (req, res) => {
  methods.Exams.getAllExams()
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

router.post('/', (req, res) => {
  const info = {};

  info.SubID = req.body.data.SubID;
  info.Datee = req.body.data.Datee;
  info.StuID = req.body.data.StuID;

  methods.Exams.addExam(info)
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

module.exports = router;
