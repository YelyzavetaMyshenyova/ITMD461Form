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
  }); 

  
    $("#output").click(function(){   
var f=document.getElementById('firstname').value;
var l=document.getElementById('lastname').value;
var n=document.getElementById('number').value;
var myObj, x, r, m;
myObj = {
  "first":[f],
  "last":[l],
  "num":[n]
};
r = myObj.first[0];
m = myObj.last[0];
x= myObj.num[0];
document.getElementById("data").innerHTML = r+" "+m+" "+x;
}); 

  });


                  
                  
                  
