const express = require('express');

const router = express.Router();
const methods = require('../methods');

router.post('/register', (req, res) => {
  const info = {};

//   info.SubID = req.body.data.SubID;
//   info.Datee = req.body.data.Datee;
//   info.StuID = req.body.data.StuID;

  methods.AdminLogin.addAdmin(info)
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

router.post('/login', (req, res) => {
  const info = {};

//   info.SubID = req.body.data.SubID;
//   info.Datee = req.body.data.Datee;
//   info.StuID = req.body.data.StuID;

  methods.AdminLogin.CheckforAdmin(info)
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
