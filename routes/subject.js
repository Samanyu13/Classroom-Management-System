const express = require('express');

const router = express.Router();
const methods = require('../methods');

router.get('/', (req, res) => {
  methods.Subject.getAllSubjects()
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

  info.Name = req.body.Name;
  methods.Subject.addSubject(info)
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


router.delete('/', (req, res) => {
  const info = {};
  info.id = req.body.id;

  methods.Subject.deleteSubject(info)
    .then((model) => {
      res.status(200).json({
        status: 'Subject deleted',
        state: model,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'Not able to delete.The row may not exist.',
        state: err,
      });
    });
});


module.exports = router;
