const methods = {};

methods.Exams = require('./exams');
// methods.Classes = require('./classes');
methods.Library = require('./library');
methods.Student = require('./student');
methods.Subject = require('./subject');
methods.Volunteer = require('./volunteer');
methods.Result = require('./result');
methods.StudentLogin = require('./student_login');
methods.AdminLogin = require('./admin_login');

module.exports = methods;