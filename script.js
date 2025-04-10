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

const QUOTE_API_URL = `https://qapi.vercel.app/api/random`;

let quote_text = document.getElementById("quote-text");
let quote_author = document.getElementById("quote-text-author");
let quoteTextEl = document.createElement("span");
let quoteAuthorNameEl = document.createElement("span");

function displayQuote() {
  quoteTextEl.innerText = "Fetching todays quote...";
  quoteAuthorNameEl.innerText = "Hmm... whoz gonna be";

  let quoteTextStartEl = document.createElement("span");
  quoteTextStartEl.classList.add("quote-text-start", "quotes-symbol");
  quoteTextStartEl.innerHTML = "&#10077;";

  quoteTextEl.classList.add("quote-text-content");
  quoteTextEl.id = "quote-text-content";

  let quoteTextEndEl = document.createElement("span");
  quoteTextEndEl.classList.add("quote-text-end", "quotes-symbol");
  quoteTextEndEl.innerHTML = "&#10078;";

  quote_text.appendChild(quoteTextStartEl);
  quote_text.appendChild(quoteTextEl);
  quote_text.appendChild(quoteTextEndEl);

  let quoteAuthorSymbolEl = document.createElement("span");
  quoteAuthorSymbolEl.classList.add("author-symbol", "quotes-symbol");
  quoteAuthorSymbolEl.innerHTML = "&#167;";

  quoteAuthorNameEl.classList.add("quote-author");
  quoteAuthorNameEl.id = "quote-author";

  quote_author.appendChild(quoteAuthorSymbolEl);
  quote_author.appendChild(quoteAuthorNameEl);

  return quoteTextEl, quoteAuthorNameEl;
}

const getQuote = async () => {
  displayQuote();

  try {
    const QUOTE_RESPONSE = await fetch(QUOTE_API_URL);

    if (!QUOTE_RESPONSE.ok) {
      throw new Error("Network error");
    }
    //   Response format: Object {author: 'String', id: Number, quote: 'String'}
    const QUOTE_DATA = await QUOTE_RESPONSE.json();
    quoteTextEl.innerText = QUOTE_DATA.quote;
    quoteAuthorNameEl.innerText = QUOTE_DATA.author;
  } catch (error) {
    console.log("Quote generation unsuccessful.");
  }
};

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

let todosFormEl = document.getElementById("todos-form");
let todosInputEl = document.getElementById("todos-input");
let todosEl = document.getElementById("todos-ul");
let todosAlertEl = document.getElementById("todos-alert");
let btnAddEl = document.getElementById("todos-enter");

function addTask() {
  if (todosInputEl.value === "") {
    todosAlertEl.innerText = "No task added!!! Add some task ...";
    setTimeout(function () {
      todosAlertEl.innerText = "";
    }, 3000);
  } else {
    let listEl = document.createElement("li");
    let listParaEl = document.createElement("p");
    listParaEl.innerHTML = todosInputEl.value;
    listEl.classList.add("lists", "list-item");
    listParaEl.classList.add("lists", "list-text");
    listEl.appendChild(listParaEl);
    todosEl.appendChild(listEl);

    let spanEl = document.createElement("span");
    spanEl.innerHTML = "X";
    spanEl.classList.add("list-cross");
    listEl.appendChild(spanEl);
  }
  todosInputEl.value = "";
  saveToDoList();
}

const saveToDoList = () => {
  localStorage.setItem("todos-data", todosEl.innerHTML);
};

const showToDoList = () => {
  todosEl.innerHTML = localStorage.getItem("todos-data");
};

todosEl.addEventListener("click", (evt) => {
  if (evt.target.tagName === "P") {
    evt.target.classList.toggle("checked");
  } else if (evt.target.tagName === "LI") {
    evt.target.firstElementChild.classList.toggle("checked");
  } else if (evt.target.tagName === "SPAN") {
    evt.target.parentElement.remove();
  }
  saveToDoList();
});

btnAddEl.addEventListener("click", addTask);
todosFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

showToDoList();

// .........................................................
// .........................................................
// SIDEBAR SECTION
// .........................................................

// DISPLAY BOX SHOWS FOUR DIFFERENT CONTENTS --- WEATHER, DATE, EXCHANGE RATE, POMODORA
// .........................................................
// .........................................................

// REMOVE PREVIOUS CONTENT AND SHOW ONLY WHAT IS REQUESTED LATEST
const clearDisplayBox = () => {
  // Checks for: null, if null do nothing, else continue
  if (DISPLAY_INFO_EL.firstElementChild) {
    // Checks for: if display contains any content, if yes remove it and show new content.
    if (
      DISPLAY_INFO_EL.firstElementChild.classList.contains("display-wrapper")
    ) {
      DISPLAY_INFO_EL.removeChild(DISPLAY_INFO_EL.firstElementChild);
    }
  }
};

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

const DISPLAY_INFO_EL = document.getElementById("display-info");
let showDateEl = document.getElementById("display-date");

showDateEl.addEventListener("click", displayDate);

function displayDate() {
  clearDisplayBox();

  let generatedDate = [];
  generatedDate = getDate();

  let dateBoxEl = document.createElement("div");
  dateBoxEl.classList.add("display-wrapper", "display-wrap-d");

  let dateDayEl = document.createElement("span");
  dateDayEl.classList.add("date-disp", "date-day");
  dateDayEl.innerText = generatedDate[0];
  let dateValEl = document.createElement("span");
  dateValEl.classList.add("date-disp", "date-val");
  dateValEl.innerText = generatedDate[1];
  let dateYearEl = document.createElement("span");
  dateYearEl.classList.add("date-disp", "date-year");
  dateYearEl.innerText = generatedDate[2];
  let dateTimeEl = document.createElement("span");
  dateTimeEl.classList.add("date-disp", "date-time");
  dateTimeEl.innerText = generatedDate[3];

  dateBoxEl.appendChild(dateDayEl);
  dateBoxEl.appendChild(dateValEl);
  dateBoxEl.appendChild(dateYearEl);
  dateBoxEl.appendChild(dateTimeEl);

  DISPLAY_INFO_EL.appendChild(dateBoxEl);
}

function getDate() {
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const PAD = (num) => String(num).padStart(2, "0");

  let todayDate = new Date();
  let thedate = todayDate.getDate();
  let themonth = MONTHS[todayDate.getMonth()];
  let theday = WEEKDAYS[todayDate.getUTCDay()];
  let theyear = todayDate.getFullYear();
  let currentTime =
    PAD(todayDate.getHours()) +
    ":" +
    PAD(todayDate.getMinutes()) +
    ":" +
    PAD(todayDate.getSeconds());

  let dateReturn = [theday, thedate + " " + themonth, theyear, currentTime];

  return dateReturn;
}

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

const EXCHANGE_RATE_API_URL = `https://latest.currency-api.pages.dev/v1/currencies/eur.json`;

let showRateEl = document.getElementById("btn-exchange");

const getRate = async () => {
  clearDisplayBox();

  let generatedRateDisplay = [];

  generatedRateDisplay = displayRate();

  try {
    const RATE_RESPONSE = await fetch(EXCHANGE_RATE_API_URL);
    const RATE_DATA = await RATE_RESPONSE.json();

    let eur = RATE_DATA.eur.eur;
    let inr = RATE_DATA.eur.inr;
    let gbp = RATE_DATA.eur.gbp;
    let uah = RATE_DATA.eur.uah;
    let usd = RATE_DATA.eur.usd;

    let currencySymbol = ["&#8364;", "£", "&#8377;", "&#8372;", "$"];
    let currencySet = [eur, gbp, inr, uah, usd];

    for (let i = 0; i < 5; i++) {
      generatedRateDisplay[i].children[0].innerText = currencySet[i].toFixed(3);
    }

    for (let i = 0; i < 5; i++) {
      generatedRateDisplay[i].children[1].innerHTML = currencySymbol[i];
    }
  } catch (error) {
    console.log("Currency Rate generation failed...");
  }
};

function displayRate() {
  let rateBoxEl = document.createElement("div");
  rateBoxEl.classList.add("display-wrapper", "display-wrap-e");

  let rateGOneEl = document.createElement("div");
  let rateGTwoEl = document.createElement("div");
  let rateGThrEl = document.createElement("div");
  let rateGFouEl = document.createElement("div");
  let rateGFivEl = document.createElement("div");

  let rateGroupArr = [
    rateGOneEl,
    rateGTwoEl,
    rateGThrEl,
    rateGFouEl,
    rateGFivEl,
  ];

  for (const elem of rateGroupArr) {
    elem.classList.add("currency-group");

    let firstSpanEl = document.createElement("span");
    firstSpanEl.classList.add("currency-rate");

    let secondSpanEl = document.createElement("span");
    secondSpanEl.classList.add("currency-symbol");

    elem.appendChild(firstSpanEl);
    elem.appendChild(secondSpanEl);

    rateBoxEl.appendChild(elem);
  }

  DISPLAY_INFO_EL.appendChild(rateBoxEl);

  return rateGroupArr;
}

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

let displayPomodora = () => {
  let wrapPomodoraEl = document.createElement("div");
  wrapPomodoraEl.classList.add("display-wrapper", "display-wrap-p");
  let pomSelectEl = document.createElement("div");
  pomSelectEl.classList.add("pomodora-selection");
  let pomInputWrapEl = document.createElement("div");
  pomSelectEl.classList.add("pomodora-input-wrap");
  let pomInputEl = document.createElement("div");
  pomInputEl.classList.add("pomodora-input");
  let pomInputMinusEl = document.createElement("a");
  pomInputMinusEl.classList.add("pomodora-input-minus");
  pomInputMinusEl.id = "pomodora-input-minus";
  let pomInputMinusIconEl = document.createElement("i");
  pomInputMinusIconEl.classList.add("fa-regular", "fa-square-minus");
  let pomInputNumberEl = document.createElement("input");
  pomInputNumberEl.type = "number";
  pomInputNumberEl.id = "pomodora-input-entry";
  pomInputNumberEl.min = "0";
  pomInputNumberEl.max = "40";
  pomInputNumberEl.step = "5";
  pomInputNumberEl.value = "20";
  let pomInputPlusEl = document.createElement("a");
  pomInputPlusEl.classList.add("pomodora-input-plus");
  pomInputPlusEl.id = "pomodora-input-plus";
  let pomInputPlusIconEl = document.createElement("i");
  pomInputPlusIconEl.classList.add("fa-regular", "fa-square-plus");
  let pomOutputDispEl = document.createElement("span");
  pomOutputDispEl.classList.add("pomodora-output");
  pomOutputDispEl.id = "pomodora-output";
  let btnGroupEl = document.createElement("div");
  btnGroupEl.classList.add("pomodora-btn-grp");
  let btnPlayEl = document.createElement("a");
  btnPlayEl.classList.add("pomodora-btn", "pomodora-play");
  let iconPlayEl = document.createElement("i");
  iconPlayEl.classList.add("fa-regular", "fa-circle-play");
  let btnStopEl = document.createElement("a");
  btnStopEl.classList.add("pomodora-btn", "pomodora-stop");
  let iconStopEl = document.createElement("i");
  iconStopEl.classList.add("fa-regular", "fa-circle-pause");
  let btnResetEl = document.createElement("a");
  btnResetEl.classList.add("pomodora-btn", "pomodora-reset");
  let iconResetEl = document.createElement("i");
  iconResetEl.classList.add("fa-solid", "fa-arrows-spin");

  wrapPomodoraEl.appendChild(pomSelectEl);
  pomSelectEl.appendChild(pomInputWrapEl);
  pomInputWrapEl.appendChild(pomInputEl);
  pomInputMinusEl.appendChild(pomInputMinusIconEl);
  pomInputEl.appendChild(pomInputMinusEl);
  pomInputEl.appendChild(pomInputNumberEl);
  pomInputPlusEl.appendChild(pomInputPlusIconEl);
  pomInputEl.appendChild(pomInputPlusEl);
  pomSelectEl.appendChild(pomOutputDispEl);
  wrapPomodoraEl.appendChild(btnGroupEl);
  btnGroupEl.appendChild(btnPlayEl);
  btnPlayEl.appendChild(iconPlayEl);
  btnGroupEl.appendChild(btnStopEl);
  btnStopEl.appendChild(iconStopEl);
  btnGroupEl.appendChild(btnResetEl);
  btnResetEl.appendChild(iconResetEl);

  pomInputNumberEl.disabled = true;

  // Increment/decrement on click of +- by 5. range set for time 0-40
  pomInputMinusEl.addEventListener("click", () => {
    if (pomInputNumberEl.value > 5) {
      pomInputNumberEl.value = parseInt(pomInputNumberEl.value) - 5;
    } else {
      pomInputNumberEl.value = 20;
    }
  });

  pomInputPlusEl.addEventListener("click", () => {
    if (pomInputNumberEl.value < 40) {
      pomInputNumberEl.value = parseInt(pomInputNumberEl.value) + 5;
    } else {
      pomInputNumberEl.value = 20;
    }
  });

  DISPLAY_INFO_EL.appendChild(wrapPomodoraEl);
  return [btnPlayEl, btnStopEl, btnResetEl];
};

let getPomodora = () => {
  clearDisplayBox();

  let btns;
  btns = displayPomodora();

  let [playBtn, stopBtn, resetBtn] = [...btns];
  let timerInterval,
    timerCountdown,
    timerInitial,
    timeLeft,
    timeStoper = false,
    timePaused = 0;

  playBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);

  function updateTimer() {
    let minutesLeft = Math.floor(timeLeft / 60);
    let secondsLeft = timeLeft % 60;
    let timeFormatted = `${minutesLeft
      .toString()
      .padStart(2, "0")} : ${secondsLeft.toString().padStart(2, "0")}`;

    timerCountdown.innerHTML = timeFormatted;
  }

  function startTimer() {
    timerInitial = document.getElementById("pomodora-input-entry").value;
    if (timeStoper) timeLeft = timePaused;
    else timeLeft = timerInitial * 60;
    timeStoper = false;
    timerCountdown = document.getElementById("pomodora-output");

    timerInterval = setInterval(() => {
      timeLeft--;
      timePaused = timeLeft;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Times up!!!");
        timeLeft = timerInitial * 60;
        updateTimer();
      }
    }, 1000);
  }

  function stopTimer() {
    timeStoper = true;
    updateTimer();
    clearInterval(timerInterval);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = timerInitial * 60;
    updateTimer();
  }
};

showPomoEl.addEventListener("click", getPomodora);
// .........................................................
// .........................................................
// WEATHER
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
// .........................................................

// API KEYS AND URLS
const WEATHER_KEY = weatherApiData.THE_WEATHER_API_KEY;
const WEATHER_LAT = weatherApiData.THE_WEATHER_API_LAT;
const WEATHER_LON = weatherApiData.THE_WEATHER_API_LON;

const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${WEATHER_LAT}&lon=${WEATHER_LON}&units=metric&appid=${WEATHER_KEY}`;

let showWeatherEl = document.getElementById("btn-weather");

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

showWeatherEl.addEventListener("click", getWeather);
