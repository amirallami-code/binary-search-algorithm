// DOM Elements
const $ = document;
const elements = {
  guessText: $.querySelector(".text-guess"),
  guessText2: $.querySelector(".text-guess2"),
  guessText3: $.querySelector(".text-guess3"),
  buttonsWrapper: $.querySelector(".buttons-div"),
  headerText: $.querySelector(".header-text"),
  okBtn: $.querySelector("#OK"),
  yesBtn: $.querySelector("#Yes"),
  noBtn: $.querySelector("#No"),
  lowerBtn: $.querySelector("#Lower"),
  higherBtn: $.querySelector("#Higher"),
  againBtn: $.querySelector("#Again")
};

// Game Configuration
const CONFIG = {
  minNumber: 1,
  maxNumber: 1000
};

// Game State
let state = {
  allNumbers: [],
  shownNumbers: [],
  low: CONFIG.minNumber,
  high: CONFIG.maxNumber,
  mid: Math.floor((CONFIG.minNumber + CONFIG.maxNumber) / 2),
  guessCounter: 1
};

// Initialize the game
function initGame() {
  state.allNumbers = Array.from({length: CONFIG.maxNumber}, (_, i) => i + 1);
  elements.headerText.textContent = `I will find your picked number, between ${CONFIG.maxNumber} numbers in the lowest guesses`;
  elements.guessText.textContent = `Choose a number between ${CONFIG.minNumber} and ${CONFIG.maxNumber} (keep this number in mind)`;
  elements.guessText2.textContent = 'and Click on "OK" Button to Continue';
}

// Start guessing the user's number
function startGuessing() {
  hideElements([elements.guessText2, elements.guessText3, elements.okBtn]);
  showElements([elements.yesBtn, elements.noBtn]);
  elements.guessText.textContent = `${state.mid} is your number?`;
  elements.buttonsWrapper.addEventListener("click", handleYesNoResponse);
}

// Handle Yes/No response
function handleYesNoResponse(event) {
  if (event.target.id === "Yes") {
    showResult();
  } else if (event.target.id === "No") {
    hideElements([elements.yesBtn, elements.noBtn]);
    showElements([elements.lowerBtn, elements.higherBtn]);
    updateGuess();
  }
}

// Update the guess
function updateGuess() {
  state.shownNumbers.push(state.mid);
  elements.yesBtn.textContent = "Yes, it's my number 👍";
  elements.guessText.innerHTML = `Is <span class="Bold">${state.mid}</span> your number? If no, is your number lower than <span class="Bold">${state.mid}</span> or higher?`;
  elements.buttonsWrapper.addEventListener("click", handleLowerHigherResponse);
}

// Handle Lower/Higher response
function handleLowerHigherResponse(event) {
  showElements([elements.yesBtn]);
  state.guessCounter++;

  if (state.mid === CONFIG.minNumber + 1 || state.mid === CONFIG.maxNumber - 1) {
    state.mid = event.target.id === "Lower" ? CONFIG.minNumber : CONFIG.maxNumber;
    showResult();
    return;
  }

  if (event.target.id === "Yes") {
    showResult();
    return;
  }

  const step = event.target.id === "Lower" ? -1 : 1;
  state.mid += step * 2;

  if (state.shownNumbers.includes(state.mid)) {
    state.mid -= step;
    showResult();
  } else {
    state.mid -= step * 2;
    if (step === -1) {
      state.high = state.mid;
      state.mid -= Math.ceil((state.high - state.low) / 2);
    } else {
      state.low = state.mid;
      state.mid += Math.ceil((state.high - state.low) / 2);
    }
  }

  updateGuess();
}

// Show the final result
function showResult() {
  hideElements([elements.guessText, elements.yesBtn, elements.lowerBtn, elements.higherBtn]);
  showElements([elements.guessText2, elements.againBtn]);
  elements.guessText2.textContent = `I beat you with only ${state.guessCounter} questions 😎 Your number is ${state.mid}`;
  elements.againBtn.addEventListener('click', () => location.reload());
}

// Helper function to hide elements
function hideElements(elementsToHide) {
  elementsToHide.forEach(el => el.style.display = 'none');
}

// Helper function to show elements
function showElements(elementsToShow) {
  elementsToShow.forEach(el => el.style.display = 'inline');
}

// Initialize the game
initGame();

// Start the game when OK button is clicked
elements.okBtn.addEventListener('click', startGuessing);
