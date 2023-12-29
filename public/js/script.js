
document.addEventListener('DOMContentLoaded', function() {
const apikey="42a36296bc65f610a23d0bbe9a176983";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?`;
const weathericon=document.querySelector('.weather-icon');
const searchbox=document.querySelector(".search input");
const deg=document.getElementById("deg");
const risetime=document.getElementById("sunrisT");
const settime=document.getElementById("sunsetT");
const fer=document.getElementById("fer");
const desc=document.getElementById("des");
const country1=document.getElementById("Country");
const searchbtn=document.getElementById("searchbtn");
const cardback=document.getElementById("cardback");
const tim=document.getElementById("time");


function convertUnixToIST(unixTime) {
    const date = new Date(unixTime * 1000); // Convert UNIX time to milliseconds
    const options = {
        timeZone: 'Asia/Kolkata', // Set the timezone to Indian Standard Time
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return date.toLocaleTimeString('en-US', options);
}

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
            else{

                const response=await fetch(apiUrl+`units=metric&q=`+city+`&appid=${apikey}`);
                var data=await response.json();
                document.querySelector(".Temperature").innerHTML=data.main.temp+"°C";

            }
            
        const timestamp = Date.now();
        const currentDate = new Date(timestamp);
        const time = currentDate.toLocaleString();
        tim.innerHTML=time;

        //console.log(data)
        document.querySelector(".cityname").innerHTML=data.name;
        console.log("Alerts",data.alert);
        console.log(data);
        
        document.querySelector(".humidity").innerHTML=data.main.humidity;
        document.querySelector(".wind").innerHTML=data.wind.speed;
        desc.innerHTML=data.weather[0].description;
        country1.innerHTML=data.sys.country;
        var rise=data.sys.sunrise;
        var set=data.sys.sunset;

        risetime.innerHTML=convertUnixToIST(rise);
        settime.innerHTML=convertUnixToIST(set);
        if(data.weather[0].main=='Clouds'){
            weathericon.src="./img/Weatherimg/clouds.png";
            cardback.style.background="linear-gradient(180deg,rgb(39, 41, 44),rgb(1, 52, 59))";
            cardback.style.color="rgb(231, 226, 251)";
            
            

        }
        if(data.weather[0].main=='Clear'){
            weathericon.src="./img/Weatherimg/clear.png";
            cardback.style.background="linear-gradient(180deg,rgb(205, 221, 241),rgb(8, 209, 236))";
            cardback.style.color="rgb(24, 14, 61)";
            
        }
        if(data.weather[0].main=='Rain'){
            weathericon.src="./img/Weatherimg/rain.png";
            cardback.style.background="linear-gradient(180deg,rgb(14, 68, 68),rgb(70, 67, 249))";
            
        }
        if(data.weather[0].main=='Drizzle'){
            weathericon.src="./img/Weatherimg/drizzle.png";
            cardback.style.background="linear-gradient(180deg,rgb(1, 19, 7),rgb(68, 104, 72))";
            
        }
        if(data.weather[0].main=='Mist'){
            weathericon.src="./img/Weatherimg/mist.png";
            cardback.style.background="linear-gradient(rgb(12, 19, 7),rgb(68, 14, 72))";
            cardback.style.color="rgb(24, 14, 61)";
            
        }
        }
        catch(error){
            console.log("Error while fetching : ",error);
        }
        
}
searchbtn.addEventListener("click" , async()=>{
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