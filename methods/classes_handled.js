const Promise = require('bluebird');

const models = require('../models');

const Classes = {};

Classes.addClass = (info) => {
  console.log(info);
  return new Promise((resolve, reject) => {
    models.sequelize.query(`insert into classes_handleds (sub_id, vol_id, student_id, createdAt, updatedAt) values (${info.sub_id}, ${info.vol_id}, ${info.student_id}, NOW(), NOW() )`)
      .spread((exob) => {
        console.log(exob);
        resolve(exob);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

Classes.getAllClasses = () => new Promise((resolve, reject) => {
  models.exams.sequelize.query(`select * from classes_handleds`)
    .spread((exob) => {
      resolve(exob);
    })
    .catch((err) => {
      reject(err);
    });
});

Classes.findById = (id) => {
  console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.sequelize.query(`select * from classes_handleds where id=${classesID}`)
      .spread((parobj) => {
        if (parobj) {
          resolve(parobj);
        } else {
          reject(new Error('Not a valid class id'));
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });

};

Classes.updateClass = (info, data) => new Promise((resolve, reject) => {
  models.exams.update(data, {
      where: {
        id: info.id
      },
    })
    .then((updated) => {
      if (updated > 0) {
        resolve(updated);
      } else {
        reject(new Error());
        // throw ('err')
      }
    })
    .catch((error) => {
      reject(error);
    });
});

Classes.deleteClass = info => new Promise((resolve, reject) => {
  models.exams.destroy({
      where: {
        id: info.id,
      },
    }).then((deleted) => {
      if (deleted === 0) {
        reject(new Error());
      } else {
        resolve(deleted);
      }
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = Classes;