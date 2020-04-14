const Promise = require('bluebird');

const models = require('../models');

const Result = {};

Result.addResult = (info) => {
  console.log(info);
  return new Promise((resolve, reject) => {
    models.sequelize.query(`insert into results (exam_id, marks, remarks, createdAt, updatedAt) values (${info.examID}, ${info.marks}, ${JSON.stringify(info.remarks)}, NOW(), NOW() )`)
      .spread((stob) => {
        console.log(stob);
        resolve(stob);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

Result.getAllResults = () => new Promise((resolve, reject) => {
  models.sequelize.query(`select * from results`)
    .spread((stob) => {
      resolve(stob);
    })
    .catch((err) => {
      reject(err);
    });
});

Result.getExamResults = () => new Promise((resolve, reject) => {
  models.sequelize.query(`select results.marks as marks, results.remarks as remarks, students.name as name, subjects.name as subject from exams, results, students, subjects where exams.id = results.exam_id and subjects.id = exams.sub_id and students.id = exams.student_id`)
    .spread((stob) => {
      resolve(stob);
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = Result;