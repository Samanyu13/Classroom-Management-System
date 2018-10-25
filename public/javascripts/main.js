function getData(){
    axios.get("http://localhost:3000/student",{
        withCredentials:true
    }).then(function(result){
        var data = result.data.classes
        var text = "<table><tr><th>Name</th><th>Class</th><th>Parent Name</th><th>Address</th><th>Contact</th></tr>"
        for(var i = 0;i<data.length;i++){
            text+="<tr><td>"+data[i].name+"</td><td>"+data[i].class+"</td><td>"+data[i].parent_name+"</td><td>"+data[i].address+"</td><td>"+data[i].contact+"</td></tr>";
        }
        text+="<table>"
        var resultElement = document.getElementById('data')
        resultElement.innerHTML = text
    }).catch(function(err){
        console.log(err)
    });
}

function getVol(){
    axios.get("http://localhost:3000/volunteer",{
        withCredentials:true
    }).then(function(result){
        var data = result.data.classes
        var text = "<table><tr><th>Name</th><th>Contact</th><th>Occupation</th></tr>"
        for(var i = 0;i<data.length;i++){
            text+="<tr><td>"+data[i].name+"</td><td>"+data[i].contact+"</td><td>"+data[i].occupation+"</td></tr>";
        }
        text+="<table>"
        var resultElement = document.getElementById('data')
        resultElement.innerHTML = text
    }).catch(function(err){
        console.log(err)
    });
}

function getLibrary(){
    axios.get("http://localhost:3000/library/show_library",{
        withCredentials:true
    }).then(function(result){
        var data = result.data.classes
        var text = "<table><tr><th>Book No</th><th>Book Author</th><th>Book Name</th><th>Student Id of Borrower</th><th>Return Date</th></tr>"
        for(var i = 0;i<data.length;i++){
            text+="<tr><td>"+data[i].book_no+"</td><td>"+data[i].book_author+"</td><td>"+data[i].book_name+"</td><td>"+data[i].student_id+"</td><td>"+formatDate(data[i].ret_date)+"</td></tr>";
        }
        text+="<table>"
        var resultElement = document.getElementById('data')
        resultElement.innerHTML = text
    }).catch(function(err){
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
    console.log(day+" "+monthIndex+" "+year)
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }