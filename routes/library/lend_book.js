const express = require('express');

const router = express.Router();
const methods = require('../../methods');

router.post('/', (req, res) => {
  const info = {};
  info.BookNo = req.body.data.BookNo;
  info.student_id = req.body.data.student_id;
  methods.Library.lendBook(info)
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