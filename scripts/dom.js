let formRequest = document.querySelector('form');
const weatherState = document.querySelector('.weather_state');
const meridemHolder = document.querySelector('.meridem_holder');
// creating a data collection (DATABASE)
const cityDatabase = async (cityname) =>{
    const cityDetails = await fetchCityInfo(cityname);
    const fetchedCityKey = cityDetails.Key;
    const cityWeatherCondition = await fetchCityWeather(fetchedCityKey);
    class Database{
        constructor(cityDetails, cityWeatherCondition){
            this.details = cityDetails;
            this.weather = cityWeatherCondition;
        }
    }
    return new Database(cityDetails, cityWeatherCondition);
};
// Backend for DOM Manipulation 
const dataDisplay = async (details, weather, txtTargetRequest) =>{
    weatherState.innerHTML = `
        <div>
            <figcaption class="d-flex gap-10"><p>Weather State :</p> <p style="color: yellow;">${weather.WeatherText}</p></figcaption>
            <figcaption class="d-flex gap-10"><p>Temperatue Reading :</p> <p style="color: yellow;">${weather.Temperature.Metric.Value}&deg; C</p></figcaption>
        </div>
        <figure class="d-flex justify-center align-center"><img src="img/icons/${weather.WeatherIcon}.svg" width="70px"></figure>
    `;
   
    let meridemIcon = (weather.IsDayTime) ? "img/day.svg" : "img/night.svg";
    meridemHolder.classList.remove('d-none');
    meridemHolder.innerHTML = `
        <div class="meridiem_display">
            <img src="${meridemIcon}">
             <div class="city_name d-flex justify-center align-center">
                <h2><b>${txtTargetRequest}</b></h2>
            </div>
            <p style="padding: 10px 10px; color: rgba(255,255,255,0.4); text-align: center;"><small>Programmed by Njokuocha Francis</small></p>
        </div>

    `;
};
// *****************DATABASE******************
// testing the fetched data group (details, weather)
// cityDatabase("canada").then(data => console.log(data));
// *****************DATABASE******************

// making a fetch request onsubmit event 
formRequest.addEventListener('submit', makeRequest);
function makeRequest(event){
    event.preventDefault();
    const txtTargetRequest = this.input.value.trim();
    this.reset();

    cityDatabase(txtTargetRequest).then(Database =>{
        const {details, weather} = Database;
        dataDisplay(details, weather, txtTargetRequest);
    }).catch(err => alert('Enter a valid city name'));
  
}

// Programmed by Njokuocha Francis
// Completed on Mon 5th August 2024 by 10:20pm
// Face your fears and get rid of it 