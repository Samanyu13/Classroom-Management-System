const Promise = require('bluebird');

const models = require('../models');

const Subject = {};

Subject.addExam = (info) => {
    console.log(info);
    return new Promise((resolve, reject) => {
        models.sequelize.query(`insert into subjects (name, createdAt, updatedAt) values (${JSON.stringify(info.Name)}, NOW(), NOW() )`)
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
  
Subject.getAllSubjects = () => new Promise((resolve, reject) => {
    models.sequelize.query(`select * from subjects`)
    .spread((exob) => {
        resolve(exob);
    })
    .catch((err) => {
        reject(err);
    });
});

Subject.findById = (id) => {
    console.log('finding by id');
    return new Promise((resolve, reject) => {
        models.sequelize.query(`select * from subjects where id=${Id}`)
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
  
Subject.updateSubject = (info, data) => new Promise((
    resolve,
    reject,
    ) => {
        models.subject.update(data, { where: 
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
  
Subject.deleteSubject = info => new Promise((resolve, reject) => {
    models.subject.destroy({
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
  
module.exports = Subject;