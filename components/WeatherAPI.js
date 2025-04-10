import { clearDisplayBox } from "./clearDisplayBox.js";

// API KEYS AND URLS
const WEATHER_KEY = weatherApiData.THE_WEATHER_API_KEY;
const WEATHER_LAT = weatherApiData.THE_WEATHER_API_LAT;
const WEATHER_LON = weatherApiData.THE_WEATHER_API_LON;

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${WEATHER_LAT}&lon=${WEATHER_LON}&units=metric&appid=${WEATHER_KEY}`;

const DISPLAY_INFO_EL = document.getElementById("display-info");

let displayWeather = () => {
  let weatherWrapEl = document.createElement("div");
  weatherWrapEl.classList.add("display-wrapper", "display-wrap-w");
  let weatherDataEl = document.createElement("div");
  weatherDataEl.classList.add("weather-data");
  weatherDataEl.id = "weather-data";
  let weatherSymbEl = document.createElement("div");
  weatherSymbEl.classList.add("weather-symb");
  let weatherCityEl = document.createElement("span");
  weatherCityEl.classList.add("weather-city");
  weatherCityEl.innerText = "Sumy, UA";
  let weatherIconEl = document.createElement("img");
  weatherIconEl.classList.add("weather-icon");
  weatherIconEl.alt = "weather icon";
  let weatherInfoEl = document.createElement("div");
  weatherInfoEl.classList.add("weather-info");
  let weatherTempEl = document.createElement("span");
  weatherTempEl.classList.add("weather-temp");
  let weatherDescEl = document.createElement("span");
  weatherDescEl.classList.add("weather-desc");

  let weatherDetailsEl = document.createElement("div");
  weatherDetailsEl.classList.add("weather-details");
  let weatherFeelEl = document.createElement("span");
  weatherFeelEl.classList.add("weather-feel");
  let weatherHumiEl = document.createElement("span");
  weatherHumiEl.classList.add("weather-humi");
  let weatherWindEl = document.createElement("span");
  weatherWindEl.classList.add("weather-wind");

  weatherWrapEl.appendChild(weatherDataEl);
  weatherDataEl.appendChild(weatherSymbEl);
  weatherSymbEl.appendChild(weatherCityEl);
  weatherSymbEl.appendChild(weatherIconEl);
  weatherDataEl.appendChild(weatherInfoEl);
  weatherInfoEl.appendChild(weatherTempEl);
  weatherInfoEl.appendChild(weatherDescEl);

  weatherDataEl.appendChild(weatherDetailsEl);
  weatherDetailsEl.appendChild(weatherFeelEl);
  weatherDetailsEl.appendChild(weatherHumiEl);
  weatherDetailsEl.appendChild(weatherWindEl);

  DISPLAY_INFO_EL.appendChild(weatherWrapEl);

  return [
    weatherIconEl,
    weatherTempEl,
    weatherDescEl,
    weatherFeelEl,
    weatherHumiEl,
    weatherWindEl,
  ];
};

const getWeather = async () => {
  clearDisplayBox();

  let weatherDataDisplayed = displayWeather();

  try {
    const WEATHER_RESPONSE = await fetch(WEATHER_API_URL);
    if (!WEATHER_RESPONSE.ok) {
      throw new Error("Network error");
    }
    const WEATHER_DATA = await WEATHER_RESPONSE.json();
    let temperature = WEATHER_DATA.main.temp;
    let description = WEATHER_DATA.weather[0].description;
    let icon = WEATHER_DATA.weather[0].icon;
    let feel = `Feels: ${WEATHER_DATA.main.feels_like} °C`;
    let humidity = `Humidity: ${WEATHER_DATA.main.humidity}`;
    let wind = `Wind: ${WEATHER_DATA.wind.speed} m/s`;

    weatherDataDisplayed[0].src = `http://openweathermap.org/img/wn/${icon}.png`;
    weatherDataDisplayed[1].textContent = `${temperature} °C`;
    weatherDataDisplayed[2].textContent = description;
    weatherDataDisplayed[3].textContent = feel;
    weatherDataDisplayed[4].textContent = humidity;
    weatherDataDisplayed[5].textContent = wind;
  } catch (error) {
    console.log("Missing Weather Data!!!");
    console.log(
      "Reminder: you need to add your own weather apikey, city latitude and longitude info!!! You can do it by going to the 'Open Weather Map Org' site and registering a free account!"
    );
  }
};

export { getWeather };
