const quotesArray = [];
const newQuote = document.getElementById("newQuote");
const displayQuote = document.getElementById("quoteDisplay");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory"); 

quotesArray.push({
  text: "The best way to predict your future is to create it.",
  category: "life"
});
quotesArray.push({
  text: "Reality continues to ruin my life.",
  category: "funny"
});
quotesArray.push({
  text: "The time is always right to do what is right",
  category: "politics"
});

const displayRandomQuote = () => {  
  // create H3 element which display the quote
  const h3 = document.createElement('h3');
  let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
  h3.textContent = randomQuote.text + ` ( ${randomQuote.category} )`;
  displayQuote.appendChild(h3);
  //console.log(quotesArray[Math.floor(Math.random() * quotesArray.length)]);
};

const addQuote = () => {
  const quoteText = newQuoteText.value;
  const quoteCategory = newQuoteCategory.value;

  quotesArray.push({text: quoteText, category: quoteCategory});

};

newQuote.addEventListener("click", displayRandomQuote);
