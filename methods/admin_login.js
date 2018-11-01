const Promise = require('bluebird');
const models = require('../models');
const bcrypt = require('bcrypt');
const AdminLogin = {};

AdminLogin.addAdmin = (info) => {
    return new Promise((resolve, reject) => {
        let hash = bcrypt.hashSync(info.password, 10);
        models.sequelize.query(`insert into admin_login (username, password, vol_id, createdAt, updatedAt) values (${JSON.stringify(info.username)}, ${hash}, ${info.vol_id}, NOW(), NOW() )`)
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

AdminLogin.checkForAdmin = (info) => {
    return new Promise((resolve,reject) => {
        models.admin_login.findOne( {
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
                    resolve(theuser);                
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

module.exports = AdminLogin;