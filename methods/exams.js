const Promise = require('bluebird');

const models = require('../models');

const Exams = {};

Exams.addExam = (info) => {
    console.log(info);
    return new Promise((resolve, reject) => {
        models.sequelize.query(`insert into exams (sub_id, date, student_id, createdAt, updatedAt) values (${info.SubID}, ${JSON.stringify(info.Datee)}, ${info.StuID}, NOW(), NOW() )`)
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

Exams.addMarks = (info) => {
    console.log(info);
    return new Promise((resolve, reject) => {
        models.sequelize.query(`insert into results (exam_id, marks, remarks, createdAt, updatedAt) values(${info.exam_id}, ${info.marks}, ${JSON.stringify(info.remarks)}, NOW(), NOW() )`)
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
    models.sequelize.query(`select * from exams`)
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
        models.sequelize.query(`select * from exams where id=${Id}`)
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
  
Exams.updateExam = (info, data) => new Promise((
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
  
Exams.deleteExam = info => new Promise((resolve, reject) => {
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