var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { title: 'Express' });
});

router.use('/student',require('./student.js'));
router.use('/volunteer',require('./volunteer.js'));
router.use('/library/add_book', require('./library/add_book.js'));

module.exports = router;
