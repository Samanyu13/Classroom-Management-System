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

  info.SubID = req.body.SubID;
  info.Date = req.body.Date;
  info.StuID = req.body.StuID;

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

// router.put('/:id', (req, res) => {
//   const info = {};
//   const data = {};

//   info.id = req.params.id; // key values for finding row

//   if (Object.prototype.hasOwnProperty.call(req.body, 'SubID') &&  
//       Object.prototype.hasOwnProperty.call(req.body, 'Date') &&
//       Object.prototype.hasOwnProperty.call(req.body, 'StuID')) {
//         data.name = req.body.Name;
//         data.class = req.body.Class;
//         data.parent_name = req.body.PName;
//   }

//   methods.Exams.updateStudent(info, data)
//     .then((model) => {
//         res.status(200).json({
//           status: 'Updated Exams',
//           state: model[0],
//         });
//     })
//     .catch((err) => {
//       res.send({
//         status: 'Not able to update.Row maynot exist',
//         state: err,
//       });
//     });
// });


router.delete('/', (req, res) => {
  const info = {};
  info.id = req.body.id;

  methods.Exams.deleteStudent(info)
    .then((model) => {
      res.status(200).json({
        status: 'Exams deleted',
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
