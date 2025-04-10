const QUOTE_API_URL = `https://qapi.vercel.app/api/random`;

let quote_text = document.getElementById("quote-text");
let quote_author = document.getElementById("quote-text-author");
let quoteTextEl = document.createElement("span");
let quoteAuthorNameEl = document.createElement("span");

function displayQuote() {
  quoteTextEl.innerText =
    "Fetching todays amazing quote which will blow your mind...";
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

export { getQuote };
