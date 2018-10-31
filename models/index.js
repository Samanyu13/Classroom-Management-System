const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require('../config/config.json')[env];
const db        = {};
var sequelize ={};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
		.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
		})
		.catch((err) => {
			console.log('Unable to connect to the database:', err);
		});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import Models such that I can use them in the api just by importing 'db'
db.exams = require('./exams')(sequelize, Sequelize);
db.classes_handled = require('./classes_handled')(sequelize, Sequelize);
db.library = require('./library')(sequelize, Sequelize);
db.student = require('./student')(sequelize, Sequelize);
db.volunteer = require('./volunteer')(sequelize, Sequelize);
db.subject = require('./subject')(sequelize, Sequelize);
db.result = require('./result')(sequelize, Sequelize);
db.admin_login = require('./admin_login')(sequelize, Sequelize);
db.student_login = require('./student_login')(sequelize, Sequelize);

module.exports = db;