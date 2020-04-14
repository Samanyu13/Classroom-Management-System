const express = require('express');

const router = express.Router();
const methods = require('../methods');

router.get('/', (req, res) => {
  methods.Classes.getAllClasses()
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

  info.sub_id = req.body.data.sub_id;
  info.vol_id = req.body.data.vol_id;
  info.student_id = req.body.data.student_id;

  methods.Classes.addClass(info)
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