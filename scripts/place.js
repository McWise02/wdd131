const wind_chill = document.getElementById("windchill");
const temperature = 17;
const windSpeed = 2;

// Function to calculate wind chill
const calculateWindChill = (tempC, windKmh) => 
    (tempC <= 10 && windKmh > 4.8) 
        ? (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(2) + " °C"
        : "N/A";

// Wrap the original content inside <strong>
const strong = document.createElement("strong");
strong.innerHTML = wind_chill.innerHTML; // Keep the original content inside <strong>

// Set new content with the calculated wind chill
wind_chill.innerHTML = ""; // Clear existing content
wind_chill.appendChild(strong); // Add the original content inside <strong>
wind_chill.innerHTML += ` ${calculateWindChill(temperature, windSpeed)}`; // Append wind chill value
