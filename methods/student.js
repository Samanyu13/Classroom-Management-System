const Promise = require('bluebird');

const models = require('../models');

const Student = {};

Student.addStudent = (info) => {
  console.log(info);
  return new Promise((resolve, reject) => {
    models.sequelize.query(`insert into students (name, class, parent_name, address, contact, createdAt, updatedAt) values (${JSON.stringify(info.Name)}, ${info.Class}, ${JSON.stringify(info.PName)}, ${JSON.stringify(info.Address)},${info.Contact}, NOW(), NOW() )`)
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

Student.getAllStudents = () => new Promise((resolve, reject) => {
  models.sequelize.query(`select * from students`)
    .spread((stob) => {
      resolve(stob);
    })
    .catch((err) => {
      reject(err);
    });
});

Student.findById = (id) => {
  console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.sequelize.query(`select * from students where id=${Id}`)
      .spread((stob) => {
        if (stob) {
          resolve(stob);
        }
        else {
          reject(new Error('Not a valid class id'));
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });

};

Student.updateStudent = (info, data) => new Promise((
  resolve,
  reject,
) => {
  models.student.update(data, {
    where:
      { id: info.id },
  })
    .then((updated) => {
      if (updated > 0) {
        resolve(updated);
      }
      else {
        reject(new Error());
        // throw ('err')
      }
    })
    .catch((error) => {
      reject(error);
    });
});

Student.deleteStudent = info => new Promise((resolve, reject) => {
  models.student.destroy({
    where: {
      id: info.id,
    },
  }).then((deleted) => {
    if (deleted === 0) {
      reject(new Error());
    }
    else {
      resolve(deleted);
    }
  })
    .catch((err) => {
      reject(err);
    });
});

module.exports = Student;