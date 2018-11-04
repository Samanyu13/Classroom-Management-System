function addStudent() {
  var name = document.getElementById('name').value;
  var classvalue = document.getElementById('class').value;
  var pname = document.getElementById('pname').value;
  var address = document.getElementById('address').value;
  var contact = document.getElementById('contact').value;
  var tosend = {};
  tosend.Name = name;
  tosend.Class = classvalue;
  tosend.PName = pname;
  tosend.Address = address;
  tosend.Contact = contact;
  axios.post('http://localhost:3000/student', {
      data: tosend
    })
    .then(function (result) {
      window.location.href = "index.html"
    })
    .catch(function (err) {
      console.log(err)
    });
}

function addVol() {
  var name = document.getElementById('name').value;
  var contactno = document.getElementById('contactno').value;
  var occup = document.getElementById('occup').value;
  var tosend = {};
  tosend.Name = name;
  tosend.Contact = contactno;
  tosend.Occupation = occup;
  axios.post('http://localhost:3000/volunteer', {
      data: tosend
    })
    .then(function (result) {
      window.location.href = "index.html"
    })
    .catch(function (err) {
      console.log(err)
    });
}

function addBook() {
  var bookno = document.getElementById('bookno').value;
  var bookname = document.getElementById('bookname').value;
  var bookauthor = document.getElementById('bookauthor').value;
  var tosend = {};
  tosend.BookNo = bookno;
  tosend.BookName = bookname;
  tosend.BookAuthor = bookauthor;
  axios.post('http://localhost:3000/library/add_book', {
      data: tosend
    })
    .then(function (result) {
      window.location.href = "../index.html"
    })
    .catch(function (err) {
      console.log(err)
    });
}

function lendBook() {
  var bookno = document.getElementById('bookno').value;
  var student_id = document.getElementById('student_id').value;
  var tosend = {};
  tosend.BookNo = bookno;
  tosend.student_id = student_id;
  axios.post('http://localhost:3000/library/lend_book', {
      data: tosend
    })
    .then(function (result) {
      window.location.href = "../index.html";
    })
    .catch(function (err) {
      console.log(err)
    });
}

function retBook() {
  var bookno = document.getElementById('bookno').value;
  // var studentid = document.getElementById('studentid').value;
  var tosend = {};
  tosend.bookno = bookno;
  // tosend.studentid = studentid;
  axios.post('http://localhost:3000/library/ret_book', {
      data: tosend
    })
    .then(function (result) {
      window.location.href = "../index.html";
    })
    .catch(function (err) {
      console.log(err)
    });
}

function addExams() {
  var SubID = document.getElementById('SubID').value;
  var Datee = document.getElementById('Datee').value;
  var StuID = document.getElementById('StuID').value;
  var tosend = {};
  tosend.SubID = SubID;
  tosend.Datee = Datee;
  tosend.StuID = StuID;
  axios.post('http://localhost:3000/exams', {
      data: tosend
    })
    .then(function (result) {
      window.location.href = "../index.html"
    })
    .catch(function (err) {
      console.log(err)
    });
}

function addResult() {
  var marks = document.getElementById('marks').value;
  var examID = document.getElementById('examID').value;
  var remarks = document.getElementById('remarks').value;
  var tosend = {};
  tosend.examID = examID;
  tosend.marks = marks;
  tosend.remarks = remarks;
  axios.post('http://localhost:3000/result', {
      data: tosend
    })
    .then(function (result) {
      window.location.href = "../index.html"
    })
    .catch(function (err) {
      console.log(err)
    });
}

function addSubject() {
  var Name = document.getElementById('Name').value;
  var tosend = {};
  tosend.Name = Name;
  axios.post('http://localhost:3000/subject', {
    data: tosend
  }).then(function (result) {
    window.location.href = "index.html"
  }).catch(function (err) {
    console.log(err);
  });
}

function addClass() {
  var sub_id = document.getElementById('sub_id').value;
  var vol_id = document.getElementById('vol_id').value;
  var student_id = document.getElementById('student_id').value;
  var tosend = {};
  tosend.sub_id = sub_id;
  tosend.vol_id = vol_id;
  tosend.student_id = student_id;
  axios.post('http://localhost:3000/class', {
      data: tosend
    })
    .then(function (result) {
      window.location.href = "../index.html"
    })
    .catch(function (err) {
      console.log(err)
    });
}