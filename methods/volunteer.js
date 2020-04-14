const Promise = require('bluebird');

const models = require('../models');

const Volunteer = {};

Volunteer.addVolunteer = (info) => {
  console.log(info);
  return new Promise((resolve, reject) => {
    models.sequelize.query(`insert into volunteers (name, contact, occupation, createdAt, updatedAt) values (${JSON.stringify(info.Name)}, ${info.Contact}, ${JSON.stringify(info.Occupation)}, NOW(), NOW() )`)
      .spread((volob) => {
        console.log(volob);
        resolve(volob);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

Volunteer.getAllVolunteers = () => new Promise((resolve, reject) => {
  models.sequelize.query(`select * from volunteers`)
    .spread((volob) => {
      resolve(volob);
    })
    .catch((err) => {
      reject(err);
    });
});

Volunteer.findById = (id) => {
  console.log('finding by id');
  return new Promise((resolve, reject) => {
    models.sequelize.query(`select * from volunteers where id=${Id}`)
      .spread((volob) => {
        if (volob) {
          resolve(volob);
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

Volunteer.updateVolunteer = (info, data) => new Promise((
  resolve,
  reject,
) => {
  models.exams.update(data, {
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

Volunteer.deleteVolunteer = info => new Promise((resolve, reject) => {
  models.exams.destroy({
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

module.exports = Volunteer;