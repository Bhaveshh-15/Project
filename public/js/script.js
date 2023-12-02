let inp;
let city;
document.getElementById("submit").onclick=function(){
        
    inp=document.getElementById("myinp").value;
    if(inp==""){
        window.alert("Please Enter a Value");
    }
    document.getElementById("opcity").innerHTML="Showing Result of Weather for the City :"+ inp;
        
}