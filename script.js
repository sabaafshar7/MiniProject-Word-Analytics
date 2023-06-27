const TextareaEl = document.querySelector(".textarea");
const characterOfNumber = document.querySelector(".stat-number-characters");
const twitterOfNumber = document.querySelector(".stat-number-twitter");
const facebookOfNumber = document.querySelector(".stat-number-facebook");
const wordsOfNumber = document.querySelector(".stat-number-word");

const inputHandler = () => {
  let numberofWords = TextareaEl.value.split(" ").length;

  if (TextareaEl.value.length === 0) {
    numberofWords = 0;
  }

  const numberOfCharacters = TextareaEl.value.length;
  const numberofTwitter = 280 - numberOfCharacters;
  const facebookCharLeft = 2200 - numberOfCharacters;

  //change color

  if (numberofTwitter < 0) {
    twitterOfNumber.style.color = "red";
  } else {
    twitterOfNumber.style.color = "#4d5457";
  }

  if (facebookCharLeft < 0) {
    facebookOfNumber.style.color = "red";
  } else {
    facebookOfNumber.style.color = "#4d5457";
  }

  //set new number
  wordsOfNumber.textContent = numberofWords;
  characterOfNumber.textContent = numberOfCharacters;
  twitterOfNumber.textContent = numberofTwitter;
  facebookOfNumber.textContent = facebookCharLeft;
};

TextareaEl.addEventListener("input", inputHandler);
