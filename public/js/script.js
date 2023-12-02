document.addEventListener('DOMContentLoaded', function() {
const apikey=`42a36296bc65f610a23d0bbe9a176983`;
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?`;
const weathericon=document.querySelector('.weather-icon');
const searchbox=document.querySelector(".search input");
const deg=document.getElementById("deg");
const fer=document.getElementById("fer");
const searchbtn=document.getElementById("searchbtn");
    async function checkWeather(city){
        try{
            if(deg.checked){
                const response=await fetch(apiUrl+`units=metric&q=`+city+`&appid=${apikey}`);
                var data=await response.json();
                document.querySelector(".Temperature").innerHTML=data.main.temp+"°C";
            }
            else if(fer.checked){
                const response=await fetch(apiUrl+`q=`+city+`&appid=${apikey}`);
                var data=await response.json();
                document.querySelector(".Temperature").innerHTML=data.main.temp+"°F";
            }
            
        

        //console.log(data)
        document.querySelector(".cityname").innerHTML=data.name;
        
        document.querySelector(".humidity").innerHTML=data.main.humidity;
        document.querySelector(".wind").innerHTML=data.wind.speed;

        if(data.weather[0].main=='Clouds'){
            weathericon.src="./img/Weatherimg/clouds.png";

        }
        if(data.weather[0].main=='Clear'){
            weathericon.src="./img/Weatherimg/clear.png";
            
        }
        if(data.weather[0].main=='Rain'){
            weathericon.src="./img/Weatherimg/rain.png";
            
        }
        if(data.weather[0].main=='Drizzle'){
            weathericon.src="./img/Weatherimg/drizzle.png";
            
        }
        if(data.weather[0].main=='Mist'){
            weathericon.src="./img/Weatherimg/mist.png";
            
        }
        }
        catch(error){
            console.log("Error while fetching : ",error);
        }
        
}
searchbtn.addEventListener("click", async()=>{
    try{
        if(searchbox.value==""){
            window.alert("Insert a Proper Value");
        }
        await checkWeather(searchbox.value);
        searchbox.value="";
    }catch(error){
        console.log(error("Error :: ",error))
    }
    
});
});