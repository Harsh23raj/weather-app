const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0055f954bcmshb5fd9f03a67f6f0p154644jsn6cbfb4f20811',
        'X-RapidAPI-Host': ' weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather =(city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        temp.innerHTML = response.temp
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        humidity.innerHTML = response.humidity
        feels_like.innerHTML = response.feels_like
        wind_speed.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>
{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '0055f954bcmshb5fd9f03a67f6f0p154644jsn6cbfb4f20811';
    const cities = ['New York', 'London', 'New Delhi'];
    
    cities.forEach(city => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <th scope="row" class="text-start">${city}</th>
                    <td>${data.main.temp}°C</td>
                    <td>${data.main.temp_max}°C</td>
                    <td>${data.main.temp_min}°C</td>
                    <td>${data.main.humidity}%</td>
                    <td>${data.main.feels_like}°C</td>
                    <td>${data.wind.speed} km/h</td>
                `;
                document.querySelector('tbody').appendChild(row);
            });
    });
});
