function addStudent(){
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
    axios.post('http://localhost:3000/student',{data:tosend})
    .then(function(result){
        window.location.href = "index.html"
    })
    .catch(function(err){
        console.log(err)
    });
}

function addVol(){
    var name = document.getElementById('name').value;
    var contactno = document.getElementById('contactno').value;
    var occup = document.getElementById('occup').value;
    var tosend = {};
    tosend.Name = name;
    tosend.Contact = contactno;
    tosend.Occupation = occup;
    axios.post('http://localhost:3000/volunteer',{data:tosend})
    .then(function(result){
        window.location.href = "index.html"
    })
    .catch(function(err){
        console.log(err)
    });
}

function addBook(){
    var bookno = document.getElementById('bookno').value;
    var bookname = document.getElementById('bookname').value;
    var bookauthor = document.getElementById('bookauthor').value;
    var tosend = {};
    tosend.BookNo = bookno;
    tosend.BookName = bookname;
    tosend.BookAuthor = bookauthor;
    axios.post('http://localhost:3000/library/add_book',{data:tosend})
    .then(function(result){
        window.location.href = "../index.html"
    })
    .catch(function(err){
        console.log(err)
    });
}

function lendBook(){
    var bookno = document.getElementById('bookno').value;
    var student_id = document.getElementById('student_id').value;
    var tosend = {};
    tosend.BookNo = bookno;
    tosend.student_id = student_id;
    axios.post('http://localhost:3000/library/lend_book',{data:tosend})
    .then(function(result){
        window.location.href = "../index.html";
    })
    .catch(function(err){
        console.log(err)
    });
}

function retBook(){
    var bookno = document.getElementById('bookno').value;
    var student_id = document.getElementById('student_id').value;
    var tosend = {};
    tosend.BookNo = bookno;
    tosend.student_id = student_id;
    axios.post('http://localhost:3000/library/ret_book',{data:tosend})
    .then(function(result){
        window.location.href = "../index.html";
    })
    .catch(function(err){
        console.log(err)
    });
}

function addExams(){
    var SubID = document.getElementById('SubID').value;
    var Datee = document.getElementById('Datee').value;
    var StuID = document.getElementById('StuID').value;
    var tosend = {};
    tosend.SubID = SubID;
    tosend.Datee = Datee;
    tosend.StuID = StuID;
    axios.post('http://localhost:3000/exams',{data:tosend})
    .then(function(result){
        window.location.href = "../index.html"
    })
    .catch(function(err){
        console.log(err)
    });
}

function addResult(){
    var Marks = document.getElementById('Marks').value;
    var ExamID = document.getElementById('ExamID').value;
    var Remarks = document.getElementById('Remarks').value;
    var tosend = {};
    tosend.ExamID = ExamID;
    tosend.Marks = Marks;
    tosend.Remarks = Remarks;
    axios.post('http://localhost:3000/result',{data:tosend})
    .then(function(result){
        window.location.href = "../index.html"
    })
    .catch(function(err){
        console.log(err)
    });
}