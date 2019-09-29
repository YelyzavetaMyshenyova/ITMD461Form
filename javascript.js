
$(document).ready(function(){
        
function Person(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;   
        this.number=number;
    
}
        $("form").submit(function(){
                    var person = new Person(document.getElementById('firstname').value, document.getElementById('lastname').value, document.getElementById('number').value);
  alert("Submitted" + this.firstname +'<br>'+ this.lastname +  this.number);
        }

 
                         }
