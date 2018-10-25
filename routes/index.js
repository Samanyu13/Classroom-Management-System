var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { title: 'Express' });
});

router.use('/exams',require('./exams.js'));
router.use('/student',require('./student.js'));
router.use('/subject',require('./subject.js'));
router.use('/volunteer',require('./volunteer.js'));
router.use('/library/add_book', require('./library/add_book.js'));
router.use('/library/lend_book', require('./library/lend_book.js'));
router.use('/library/ret_book', require('./library/ret_book.js'));
router.use('/library/show_library', require('./library/show_library.js'));

module.exports = router;
