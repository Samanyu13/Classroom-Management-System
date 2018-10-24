const Promise = require('bluebird');

const models = require('../models');

const Exams = {};

Exams.addExam = (info) => {
    console.log(info);
    return new Promise((resolve, reject) => {
        models.sequelize.query(`insert into exams (name, address, contact, createdAt, updatedAt) values (${JSON.stringify(info.Name)}, ${JSON.stringify(info.Address)}, ${info.Contact}, NOW(), NOW() )`)
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
  
Exams.getAllExams = () => new Promise((resolve, reject) => {
    models.exams.sequelize.query(`select * from exams`)
    .spread((exob) => {
        resolve(exob);
    })
    .catch((err) => {
        reject(err);
    });
});

Exams.findById = (id) => {
    console.log('finding by id');
    return new Promise((resolve, reject) => {
        models.sequelize.query(`select * from parent where id=${parentId}`)
        .spread((parobj) => {
            if (parobj) {
                resolve(parobj);
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
  
Exams.updateParent = (info, data) => new Promise((
    resolve,
    reject,
    ) => {
        models.exams.update(data, { where: 
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
  
Exams.deleteParent = info => new Promise((resolve, reject) => {
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
  
module.exports = Exams;