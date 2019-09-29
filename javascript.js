$(document).ready(function(){
  
$("form").submit(function(){
  alert("Submitted");
  
});
  
});

function Person(fname,sname){
        this.firstname=firstname;
        this.lastname=lastname;   
        this.number=number;
}

function submit(){
var person = new Person(document.getElementById('firstname').value, document.getElementById('lastname').value, document.getElementById('number').value);
}
