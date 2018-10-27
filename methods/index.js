const methods = {};

methods.Exams = require('./exams');
// methods.Classes = require('./classes');
methods.Library = require('./library');
methods.Student = require('./student');
methods.Subject = require('./subject');
methods.Volunteer = require('./volunteer');
methods.Result = require('./result');

module.exports = methods;