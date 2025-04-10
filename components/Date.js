import { clearDisplayBox } from "./clearDisplayBox.js";

const DISPLAY_INFO_EL = document.getElementById("display-info");

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

export { displayDate };
