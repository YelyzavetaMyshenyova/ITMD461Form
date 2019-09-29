$(document).ready(function(){
        this.firstname=firstname;
        this.lastname=lastname;   
        this.number=number;
  var person = new Person(document.getElementById('firstname').value, document.getElementById('lastname').value, document.getElementById('number').value);
$("form").submit(function(){
  alert("Submitted");
  
});
  
});



function submit(){

str = JSON.stringify(person);
str = JSON.stringify(person, null, 4); // (Optional) beautiful indented output.
console.log(str); // Logs output to dev tools console.
alert(str);
}

