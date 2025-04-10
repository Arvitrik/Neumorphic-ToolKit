import { clearDisplayBox } from "./clearDisplayBox.js";

const EXCHANGE_RATE_API_URL = `https://latest.currency-api.pages.dev/v1/currencies/eur.json`;

const DISPLAY_INFO_EL = document.getElementById("display-info");

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

export { getRate };
