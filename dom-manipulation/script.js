const quotesArray = [];
const newQuote = document.getElementById("newQuote");
const displayQuote = document.getElementById("quoteDisplay");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory"); 
const existQuote = document.querySelector('.existQuote');
const downloadButton = document.getElementById('download');

/*
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
*/


const existingQuotes = JSON.parse(localStorage.getItem("quoteText")) || [];
console.log(existingQuotes);
existingQuotes.forEach(element => {
  const para = document.createElement('p');
  para.innerHTML = JSON.stringify(element);

  existQuote.appendChild(para);
});

const createAddQuoteForm = () => {
  const quoteText = newQuoteText.value;
  const quoteCategory = newQuoteCategory.value;

  quotesArray.push({text: quoteText, category: quoteCategory});
  newQuoteText.value = "";
  newQuoteCategory.value = "";

  // saving quotes to localStorage
  localStorage.setItem("quoteText", JSON.stringify(quotesArray));
};

const showRandomQuote = () => {  
  // create H3 element which display the quote
  const h3 = document.createElement('h3');
  let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
  h3.innerHTML = randomQuote.text + ` ( ${randomQuote.category} )`;
  displayQuote.appendChild(h3);
  //console.log(quotesArray[Math.floor(Math.random() * quotesArray.length)]);
};

const JSONToFile = (quotesArray, filename) => {
  const blob = new Blob([JSON.stringify(quotesArray, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.json`;
  a.click();
  URL.revokeObjectURL(url);

  downloadButton.appendChild(a);
};

JSONToFile({ test: 'is passed' }, 'testJSONFile');
// downloads the object as 'testJSONFile.json'

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}

newQuote.addEventListener("click", showRandomQuote);
