const express = require('express');

const router = express.Router();
const methods = require('../../methods');

router.post('/', (req, res) => {
  const info = {};
  info.bookno = req.body.data.bookno;
  // info.studentid = req.body.data.studentid;
  methods.Library.retBook(info)
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

module.exports = router;