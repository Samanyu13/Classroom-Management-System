function getData(){
    axios.get("http://localhost:3000/student",{
        withCredentials:true
    }).then(function(result){
        var data = result.data.classes
        var text = "<table><tr><th>Name</th><th>Class</th><th>Parent Name</th></tr>"
        for(var i = 0;i<data.length;i++){
            text+="<tr><td>"+data[i].name+"</td><td>"+data[i].class+"</td><td>"+data[i].parent_name+"</td></tr>";
        }
        text+="<table>"
        var resultElement = document.getElementById('data')
        resultElement.innerHTML = text
    }).catch(function(err){
        console.log(err)
    });


}