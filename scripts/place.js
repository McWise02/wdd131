const wind_chill = document.getElementById("windchill");
const temperature = 17;
const windSpeed = 2;

const calculateWindChill = (tempC, windKmh) => 
    (tempC <= 10 && windKmh > 4.8) 
        ? (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(2) + " °C"
        : "N/A";

const strong = document.createElement("strong");
strong.innerHTML = wind_chill.innerHTML; 
wind_chill.innerHTML = ""; 
wind_chill.appendChild(strong); 
wind_chill.innerHTML += ` ${calculateWindChill(temperature, windSpeed)}`; 

const weatherIcon = document.getElementById("weather-icon");

const updateWeatherIcon = () => {
    weatherIcon.innerHTML = window.innerWidth >= 600 
        ? "🌤" 
        : '<img class="weather-image" src="images/partly-cloudy.svg" alt="Partly Cloudy Icon">'; 
};

updateWeatherIcon();

window.addEventListener("resize", updateWeatherIcon);