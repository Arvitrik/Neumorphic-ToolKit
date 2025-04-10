import { getQuote } from "./components/Quotes.js";
import { displayDate } from "./components/Date.js";
import { getRate } from "./components/ExchangeRate.js";
import { getPomodora } from "./components/Pomodora.js";
import { getWeather } from "./components/WeatherAPI.js";
import { showToDoList } from "./components/ToDos.js";

// .........................................................
// .........................................................
// QUOTES (HEADER SECTION)
// .........................................................
// .........................................................

// SCREEN DISPLAY HTML FORMAT
{
  /* 
  <p class="quote-text" id="quote-text">
    <span class="quote-text-start quotes-symbol">❝</span>
    <span class="quote-text-content" id="quote-text-content">......</span>
    <span class="quote-text-end quotes-symbol">❞</span>
  </p>
  <p class="quote-text-author" id="quote-text-author">
    <span class="author-symbol quotes-symbol">§</span>
    <span class="quote-author" id="quote-author">....</span>
  </p>
 */
}
// .........................................................

document.addEventListener("DOMContentLoaded", getQuote);

// .........................................................
// .........................................................
// TO DOs (MAIN SECTION)
// .........................................................
// .........................................................

// SCREEN DISPLAY HTML FORMAT
{
  /* 
  <li class="list-item">
    <p class="list-text"> item-1 Lorem ipsum dolor sit amet consectetur...
      <span class="list-cross">X</span>
    </p>
  </li>
  <li class="list-item checked">
    <p class="list-text"> item-3 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      <span class="list-cross">X</span>
    </p>
  </li> */
}
// .........................................................

showToDoList();

// .........................................................
// .........................................................
// SIDEBAR SECTION
// .........................................................

// DISPLAY BOX SHOWS FOUR DIFFERENT CONTENTS --- WEATHER, DATE, EXCHANGE RATE, POMODORA
// .........................................................
// .........................................................
// ClearDisplayBox

// .........................................................
// .........................................................
// Show DATE
// .........................................................
// .........................................................

// SCREEN DISPLAY HTML FORMAT
{
  /* <div class="display-wrapper display-wrap-d">
  <span class="date-disp date-day">Wednesday</span>
  <span class="date-disp date-num">17 Sep</span>
  <span class="date-disp date-year">2020</span>
  <span class="date-disp date-time">08:08:08</span>
</div>  */
}
// .........................................................

let showDateEl = document.getElementById("display-date");
showDateEl.addEventListener("click", displayDate);

// .........................................................
// .........................................................
// CURRENCY EXCHANGE RATES
// .........................................................
// .........................................................

// SCREEN DISPLAY HTML FORMAT
{
  /* <div class="display-wrapper display-wrap-e">
  <div class="currency-group">
    <span class="currency-rate">1</span>
    <span class="currency-symbol">&#8364;</span>
  </div>
  <div class="currency-group">
    <span class="currency-rate">1.2323</span>
    <span class="currency-symbol">&#8372;</span>
  </div>
  <div class="currency-group">
    <span class="currency-rate">23.234</span>
    <span class="currency-symbol">$</span>
  </div>
  <div class="currency-group">
    <span class="currency-rate">1.234</span>
    <span class="currency-symbol">£</span>
  </div>
  <div class="currency-group">
    <span class="currency-rate">123.45</span>
    <span class="currency-symbol">&#8377;</span>
  </div>
</div>; */
}
// .........................................................
// .........................................................

let showRateEl = document.getElementById("btn-exchange");
showRateEl.addEventListener("click", getRate);

// .........................................................
// .........................................................
// POMODORA TIMER
// .........................................................
// .........................................................

//  SCREEN DISPLAY HTML FORMAT
{
  /*
<div class="display-wrapper display-wrap-p">
  <div class="pomodora-selection">
    <div class="pomodora-input-wrap">
      <div class="pomodora-input">
        <a class="pomodora-input-minus" id="pomodora-input-minus">
          <i class="fa-regular fa-square-minus"></i>
        </a>
        <input type="number" value="20" min="0" max="40" step="5" id="pomodora-input-entry" />
        <a class="pomodora-input-plus" id="pomodora-input-plus">
          <i class="fa-regular fa-square-plus"></i>
        </a>
      </div>
    </div>
    <span class="pomodora-output" id="pomodora-output">05:00</span>
  </div>
  <div class="pomodora-btn-grp">
    <a class="pomodora-btn pomodora-play">
      <i class="fa-regular fa-circle-play"></i>
    </a>
    <a class="pomodora-btn pomodora-stop">
      <i class="fa-regular fa-circle-stop"></i>
    </a>
    <a class="pomodora-btn pomodora-reset">
      <i class="fa-solid fa-arrows-spin"></i>
    </a>
  </div>
</div> */
}
// .........................................................

let showPomoEl = document.getElementById("btn-pomodora");
showPomoEl.addEventListener("click", getPomodora);

// .........................................................
// .........................................................
// WEATHER
// .........................................................
// .........................................................

// .........................................................

//  SCREEN DISPLAY HTML FORMAT
{
  /* <div class="display-wrapper display-wrap-w">
  <div class="weather-data" id="weather-data">
  <div class="weather-symb">
  <span class="weather-city">Sumy, UA</span>
  <img
  class="weather-icon"
  src="https://openweathermap.org/img/wn/04n.png"
  alt="weather icon"
  />
  </div>
  <div class="weather-info">
  <span class="weather-temp">22 C</span>
  <span class="weather-desc">Sunny</span>
  </div>
    <div class="weather-details">
    <span class="weather-feel"> Feels: 23 C </span>
    <span class="weather-humi"> Humidity: 40% </span>
    <span class="weather-wind"> Wind: 5m/s </span>
    </div>
    </div>
    </div>; */
}

let showWeatherEl = document.getElementById("btn-weather");
showWeatherEl.addEventListener("click", getWeather);
