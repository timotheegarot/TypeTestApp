const quoteApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

const renderNewQiote = async() => {
  const response = await fetch(quoteApiUrl);
  let data = await response.json();
  quote = data.content;

  let arr = quote.split("").map((value) => {
    return "<span class='quote-chars>'" + value + "</span>";
  })
  quoteSection.innerHTML += arr.join("");
}