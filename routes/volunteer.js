const express = require('express');

const router = express.Router();
const methods = require('../methods');

router.get('/', (req, res) => {
  methods.Volunteer.getAllVolunteers()
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
  info.Name = req.body.data.Name;
  info.Contact = req.body.data.Contact;
  info.Occupation = req.body.data.Occupation;

  methods.Volunteer.addVolunteer(info)
    .then((model) => {
      console.log(info)

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
    Object.prototype.hasOwnProperty.call(req.body, 'Contact') &&
    Object.prototype.hasOwnProperty.call(req.body, 'Occupation')) {
    data.name = req.body.Name;
    data.contact = req.body.Contact;
    data.occupation = req.body.Occupation;
  }

  methods.Volunteer.updateVolunteer(info, data)
    .then((model) => {
      res.status(200).json({
        status: 'Updated Volunteer',
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

  methods.Volunteer.deleteVolunteer(info)
    .then((model) => {
      res.status(200).json({
        status: 'Volunteer deleted',
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
