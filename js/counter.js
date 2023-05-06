// Select the required HTML elements
const counter = document.querySelector(".counter-value");
const increment = document.querySelector(".increment");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

// Sets the initial value of the counter | State
let startCounter = 0;

// Aux Functions

// Update counter value in HTML
function updateCounter() {
  counter.textContent = startCounter;
}

// Increments the counter value
function incrementCounter() {
  startCounter++;
  updateCounter();
}

// Decrements the counter value, but never below zero
function decreaseContador() {
  if (startCounter > 0) {
    startCounter--;
    updateCounter();
  }
}

// Reset the counter value
function resetContador() {
  startCounter = 0;
  updateCounter();
}

//Adding Listeners to DOM Elements
increment.addEventListener("click", incrementCounter);
decrease.addEventListener("click", decreaseContador);
reset.addEventListener("click", resetContador);

// < ---------- simplified code ----------->

// let startCounter = 0;
// const counter = document.querySelector(".counter-value");

// function incrementCounter() {
//   startCounter++;
//   counter.textContent = startCounter;
// }

// function decreaseContador() {
//   if (startCounter > 0) {
//     startCounter--;
//     counter.textContent = startCounter;
//   }
// }

// function resetContador() {
//   startCounter = 0;
//   counter.textContent = startCounter;
// }
// This case use the onclick event in html elements.
