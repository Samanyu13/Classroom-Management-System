const express = require('express');

const router = express.Router();
const methods = require('../methods');

router.get('/', (req, res) => {
  methods.Student.getAllStudents()
    .then((model) => {
      res.status(200).json({
        status: 'success',
        classes: model,
      });
    })
    .catch((err) => {
      res.json({
        status: 'error poda',
        error: err,
      });
    });
});

router.post('/', (req, res) => {
  const info = {};

  info.Name = req.body.Name;
  info.Class = req.body.Class;
  info.PName = req.body.PName;
  info.Address = req.body.Address;
  info.Contact = req.body.Contact;

  methods.Student.addStudent(info)
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

router.put('/:id', (req, res) => {
  const info = {};
  const data = {};

  info.id = req.params.id; // key values for finding row

  if (Object.prototype.hasOwnProperty.call(req.body, 'Name') &&  
      Object.prototype.hasOwnProperty.call(req.body, 'Class') &&
      Object.prototype.hasOwnProperty.call(req.body, 'PName') &&  
      Object.prototype.hasOwnProperty.call(req.body, 'Address') &&
      Object.prototype.hasOwnProperty.call(req.body, 'Contact')) {
        data.name = req.body.Name;
        data.class = req.body.Class;
        data.parent_name = req.body.PName;
        data.address = req.body.Address;
        data.contact = req.body.Contact;
  }

  methods.Student.updateStudent(info, data)
    .then((model) => {
        res.status(200).json({
          status: 'Updated Student',
          state: model[0],
        });
    })
    .catch((err) => {
      res.send({
        status: 'Not able to update.Row maynot exist',
        state: err,
      });
    });
});


router.delete('/', (req, res) => {
  const info = {};
  info.id = req.body.id;

  methods.Student.deleteStudent(info)
    .then((model) => {
      res.status(200).json({
        status: 'Student deleted',
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
