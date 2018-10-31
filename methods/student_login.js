const Promise = require('bluebird');
const models = require('../models');
const bcrypt = require('bcrypt');
const StudentLogin = {};

StudentLogin.addUser = (info) => {
    return new Promise((resolve, reject) => {
        let hash = bcrypt.hashSync(info.password, 10);
        models.sequelize.query(`insert into student_login (username, password, student_id, createdAt, updatedAt) values (${JSON.stringify(info.username)}, ${hash}, ${info.vol_id}, NOW(), NOW() )`)
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

StudentLogin.checkIfUser = (info) => {
    return new Promise((resolve,reject) => {
        models.student_login.findOne( {
            where  :    {
                username: info.username
            }
        })
        .then((theuser) => {
            if(!theuser)
            {
                console.log('Invalid Username..!');
            }
            else
            {               
                if(bcrypt.compareSync(info.password, theuser.password)) {
                    console.log('Successful');
                    resolve(theuser)                   
                } 
                else {
                    console.log('Invalid Password..!');
                }
            }
        })
        .catch((err) => {
            reject(err);
        });
    })
}

module.exports = StudentLogin;