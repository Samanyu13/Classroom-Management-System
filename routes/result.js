const express = require('express');

const router = express.Router();
const methods = require('../methods');

router.post('/', (req, res) => {
  const info = {};

  info.marks = req.body.marks;
  info.exam_id = req.body.exam_id;
  info.remarks = req.body.remarks;

  methods.Exams.addMarks(info)
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
