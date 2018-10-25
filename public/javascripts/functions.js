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
