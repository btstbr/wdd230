function calculateWindChill(temperature, windSpeed) {
    // Check if the temperature and wind speed  are valid
    if (temperature > 50 || windSpeed < 3) {
        // return "Invalid input. Temperature should be less than or equal to 50 °F and wind speed should be greater than 3 mph.";
        return "N/A";
    }
    // Calculate wind chill factor
    var windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChillFactor.toFixed(1) + `&deg;F`;
}

// Testing:
var temperatureFahrenheit = 34; // Temperature in Fahrenheit
var windSpeedMph = 20; // Wind speed in mph
var temperatureCelsius = convertToFahrenheitToCelsius(temperatureFahrenheit);
var windChillCelsius = calculateWindChill(temperatureCelsius, windSpeedMph);
console.log("Wind Chill Factor: " + windChillCelsius + "°C");

document.getElementById("temp-area").innerHTML = temperatureCelsius + "°C";
document.getElementById("wind-speed").innerHTML = windSpeedMph + " mph";
document.getElementById("wind-chill").innerHTML = windChillCelsius + "°C";

// Função para converter Fahrenheit para Celsius
function convertToFahrenheitToCelsius(temperatureFahrenheit) {
    return (temperatureFahrenheit - 32) * 5 / 9;
}

// Função para calcular o fator de sensação térmica do vento em Celsius
function calculateWindChill(temperatureCelsius, windSpeedMph) {
    // Fórmula para calcular o fator de sensação térmica do vento
    return 13.12 + (0.6215 * temperatureCelsius) - (11.37 * Math.pow(windSpeedMph, 0.16)) + (0.3965 * temperatureCelsius * Math.pow(windSpeedMph, 0.16));
}