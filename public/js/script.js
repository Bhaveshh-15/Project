

var searchbut=document.getElementById("submit");
searchbut.addEventListener('click',function(e){
    var cityinp=document.getElementById("myinp");
    var city=cityinp.value;
    if(cityinp==""){
        window.alert("PLEASE ENTER CITY");
    }
    else{

        checkWeather();
        cityinp.value="";
    }
    
})


const apikey="42a36296bc65f610a23d0bbe9a176983";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56d5c8908be366ba059962f0e2bf8a1c";

    async function checkWeather(){
        const response=await fetch(apiUrl+'&appid=${apikey}');
        var data=await response.json();

        //console.log(data)
        document.querySelector(".cityname").innerHTML=data.name;
        document.querySelector(".Temperature").innerHTML=data.main.temp;
        document.querySelector(".humidity").innerHTML=data.main.humidity;
        document.querySelector(".wind").innerHTML=data.main.wind;
}