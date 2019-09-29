function Person(firstname,lastname,number){
  this.firstname = firstname;
  this.lastname = lastname; 
  this.number = number;
  this.confirm = function(){
    alert(this.firstname + ' ' + this.lastname + "'s favorite number is " + this.number);
  }
}  



$(document).ready(function(){
  
  $("#sub").click(function(){        
      $(".allthefields").submit(); // Submit the form
      var p = new Person(
        document.getElementById('firstname').value, 
        document.getElementById('lastname').value,
        document.getElementById('number').value
        );
      p.confirm();
  });
    $("#output").click(function(){   
 $("#data").append(person)
  }
}); 




                  
                  
                  
