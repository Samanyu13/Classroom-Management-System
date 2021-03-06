function getData() {
  axios.get("http://localhost:3000/student", {
    withCredentials: true
  }).then(function (result) {
    var data = result.data.classes
    var text = "<table><tr><th>Student ID</th><th>Name</th><th>Class</th><th>Parent Name</th><th>Address</th><th>Contact</th></tr>"
    for (var i = 0; i < data.length; i++) {
      text += "<tr><td>" + data[i].id + "</td><td>" + data[i].name + "</td><td>" + data[i].class + "</td><td>" + data[i].parent_name + "</td><td>" + data[i].address + "</td><td>" + data[i].contact + "</td></tr>";
    }
    text += "<table>"
    var resultElement = document.getElementById('data')
    resultElement.innerHTML = text
  }).catch(function (err) {
    console.log(err)
  });
}

function getVol() {
  axios.get("http://localhost:3000/volunteer", {
    withCredentials: true
  }).then(function (result) {
    var data = result.data.classes
    var text = "<table><tr><th>Volunteer ID</th><th>Name</th><th>Contact</th><th>Occupation</th></tr>"
    for (var i = 0; i < data.length; i++) {
      text += "<tr><td>" + data[i].id + "</td><td>" + data[i].name + "</td><td>" + data[i].contact + "</td><td>" + data[i].occupation + "</td></tr>";
    }
    text += "<table>"
    var resultElement = document.getElementById('data')
    resultElement.innerHTML = text
  }).catch(function (err) {
    console.log(err)
  });
}

function getExamResults() {
  axios.get("http://localhost:3000/showresult", {
    withCredentials: true
  }).then(function (result) {
    var data = result.data.classes
    var text = "<table><tr><th>Student Name</th><th>Subject</th><th>Marks</th><th>Remarks</th></tr>"
    for (var i = 0; i < data.length; i++) {
      text += "<tr><td>" + data[i].name + "</td><td>" + data[i].subject + "</td><td>" + data[i].marks + "</td><td>" + data[i].remarks + "</td></tr>";
    }
    text += "<table>"
    var resultElement = document.getElementById('data')
    resultElement.innerHTML = text
  }).catch(function (err) {
    console.log(err);
  });
}

function getClasses() {
  axios.get("http://localhost:3000/class", {
    withCredentials: true
  }).then(function (result) {
    var data = result.data.classes;
    var text = "<table><tr><th>Student Name</th><th>Volunteer Name</th><th>Subject</th></tr>"
    for (var i = 0; i < data.length; i++) {
      text += "<tr><td>" + data[i].studentname + "</td><td>" + data[i].volname + "</td><td>" + data[i].subject + "</td></tr>";
    }
    text += "<table>"
    var resultElement = document.getElementById('data')
    resultElement.innerHTML = text
  }).catch(function (err) {
    console.log(err);
  });
}

function getLendedLibrary() {
  axios.get("http://localhost:3000/library/show_library/lended", {
    withCredentials: true
  }).then(function (result) {
    var data = result.data.classes
    var text = "<table><tr><th>Book No</th><th>Book Author</th><th>Book Name</th><th>Student Id of Borrower</th><th>Return Date</th></tr>"
    for (var i = 0; i < data.length; i++) {
      text += "<tr><td>" + data[i].book_no + "</td><td>" + data[i].book_author + "</td><td>" + data[i].book_name + "</td><td>" + data[i].student_id + "</td><td>" + formatDate(data[i].ret_date) + "</td></tr>";
    }
    text += "</table>"
    var resultElement = document.getElementById('lend')
    resultElement.innerHTML = text
  }).catch(function (err) {
    console.log(err)
  });
}

function getAvailableLibrary() {
  axios.get("http://localhost:3000/library/show_library/available", {
    withCredentials: true
  }).then(function (result) {
    var data = result.data.classes
    var text = "<table><tr><th>Book No</th><th>Book Author</th><th>Book Name</th></tr>"
    for (var i = 0; i < data.length; i++) {
      text += "<tr><td>" + data[i].book_no + "</td><td>" + data[i].book_author + "</td><td>" + data[i].book_name + "</td></tr>";
    }
    text += "</table>"
    var resultElement = document.getElementById('avail')
    resultElement.innerHTML = text
  }).catch(function (err) {
    console.log(err)
  });
}

function formatDate(date) {
  d = new Date(date);

  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  console.log(d)
  var day = d.getDate();
  var monthIndex = d.getMonth();
  var year = d.getFullYear();
  console.log(day + " " + monthIndex + " " + year)
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function dropDown(url, field, attr, id) {
  axios.get(url, {
    withCredentials: true
  }).then(function (result) {
    var text = '<option value="" disabled selected>' + field + '</option>';
    var data = result.data.classes;
    for (var i = 0; i < data.length; i++) {
      if (data[i][attr] != undefined) {
        text += "<option>" + data[i][attr] + "</option>";
      }
    }
    var resultElement = document.getElementById(id)
    resultElement.innerHTML = text
  }).catch(function (err) {
    console.log(err)
  });
}