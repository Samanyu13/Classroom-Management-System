const express = require('express');

const router = express.Router();
const methods = require('../../methods');

router.post('/', (req, res) => {
  const info = {};
  info.BookNo = req.body.BookNo;
  info.BookName = req.body.BookName;
  info.BookAuthor = req.body.BookAuthor;
  methods.Library.addBook(info)
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