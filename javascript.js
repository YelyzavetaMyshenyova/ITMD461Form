function Person(firstname,lastname,number){
  this.firstname = firstname;
  this.lastname = lastname; 
  this.number = number;
}  



$(document).ready(function(){
  
  $("#sub").click(function(){ 
    
      $(".allthefields").submit(); // Submit the form
      var p = new Person(
        document.getElementById('firstname').value, 
        document.getElementById('lastname').value,
        document.getElementById('number').value
        );
    
    
var f=firstname;
var l=lastname;
var n=number;
var myObj, x, r, m;
myObj = {
  "first":f,
  "last":l,
  "num":[n]
};
r = myObj.first[0];
m = myObj.last[0];
x= myObj.last[0];
document.getElementById("data").innerHTML = r;
    
    
    
  });
  
    $("#output").click(function(){   
 $("#data").append(p.firstname,p.lastname,p.number)
  }); 
}); 




                  
                  
                  
