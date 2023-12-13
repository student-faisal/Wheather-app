const inputBox=document.querySelector('.inputBox');
const searchBtn=document.getElementById('searchBtn');
const wheather_image=document.querySelector('.Wheather-image');
const temprature=document.querySelector('.temprature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
const wheather_body=document.querySelector('.wheather-body');


 async function checkwheather(city){
    const api_key="e13b1582b24db51b9aeae1e9c0fa08c1";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const wheather_data= await fetch(`${url}`).then(response =>response.json());
      
      if(wheather_data.cod==='404'){
        location_not_found.style.display="flex";
        wheather_body.style.display="none";
        console.log("error")
        return;
      }

      location_not_found.style.display="none";
      wheather_body.style.display="flex";

    temprature.innerHTML=`${ Math.round(wheather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${wheather_data.weather[0].description}`;
   humidity.innerHTML=`${wheather_data.main.humidity}%`;
   wind_speed.innerHTML=`${wheather_data.wind.speed}km/H`;
   switch ( wheather_data.weather[0].main) {
    case 'Clouds':
        wheather_image.src = "cloud.png";
        break;

    case 'Clear':
        wheather_image.src = "clear.png";
        break;

    case 'Rain':
        wheather_image.src = "rain.png";
        break;

    case 'Mist':
        wheather_image = "mist.png";
        break;

    case 'Snow':
        weather_image.src = "snow.png";
        break;

    default:
        wheather_image = "unknown.png";
        break;
}

    console.log(wheather_data);


}
searchBtn.addEventListener('click',()=>{
    checkwheather(inputBox.value)
})