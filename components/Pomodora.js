import { clearDisplayBox } from "./clearDisplayBox.js";

const DISPLAY_INFO_EL = document.getElementById("display-info");

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

export { getPomodora };
