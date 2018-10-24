const Promise = require('bluebird');

const models = require('../models');

const Library = {};

Library.addLibrary = (info) => {
    console.log(info);
    return new Promise((resolve, reject) => {
        models.sequelize.query(`insert into libraries (book_no, book_author, book_name, student_id, ret_date, createdAt, updatedAt) values (${info.BookNo}, ${JSON.stringify(info.BookAuthor)}, ${JSON.stringify(info.BookName)}, NULL,${JSON.stringify(info.RetDate)}, NOW(), NOW() )`)
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
  
Library.getAllLibrary = () => new Promise((resolve, reject) => {
    models.sequelize.query(`select * from libraries`)
    .spread((stob) => {
        resolve(stob);
    })
    .catch((err) => {
        reject(err);
    });
});

Library.findById = (id) => {
    console.log('finding by id');
    return new Promise((resolve, reject) => {
        models.sequelize.query(`select * from libraries where id=${Id}`)
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
  
Library.updateLibrary = (info, data) => new Promise((
    resolve,
    reject,
    ) => {
        models.library.update(data, { where: 
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
  
Library.deleteLibrary = info => new Promise((resolve, reject) => {
    models.library.destroy({
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
  
module.exports = Library;