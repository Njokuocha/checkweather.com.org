// website: https://developer.accuweather.com
// api authentication key
const authKey = 'AKEjOpAHjQDyHizRHkSGfK2eLotjKax3';
// fetching city weather condition using city key 
const fetchCityWeather = async (citykey) =>{
    let resourceTarget = `https://dataservice.accuweather.com/currentconditions/v1/${citykey}`;
    let query = `?apikey=${authKey}&details=true`;
    resourceTarget += query;
    const city = await fetch(resourceTarget);
    const cityInfo = await city.json();
    return cityInfo[0];
}
// fetching city details with "Key" as target 
const fetchCityInfo = async (cityname) =>{
    let resourceTarget = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    let query = `?apikey=${authKey}&q=${cityname}`;
    resourceTarget += query;
    const cities = await fetch(resourceTarget);
    const citiesInfo = await cities.json();
    return citiesInfo[0];
}

// Programmed by Njokuocha Francis
// Completed on Mon 5th August 2024 by 10:20pm
// Face your fears and get rid of it 