const Promise = require('bluebird');

const models = require('../models');

const Result = {};

Result.addResult = (info) => {
  console.log(info);
  return new Promise((resolve, reject) => {
    models.sequelize.query(`insert into results (exam_id, marks, remarks, createdAt, updatedAt) values (${info.examId}, ${info.marks}, ${JSON.stringify(info.remarks)}, NOW(), NOW() )`)
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

module.exports = Result;