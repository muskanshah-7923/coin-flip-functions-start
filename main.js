// COIN FLIP SIMULATOR

// HTML ELement Variables
let outputEl = document.getElementById("output");

// Btn Click Event
document.getElementById("btn").addEventListener("click", btnHandler);

function btnHandler() {
  // First Coin Flip
  let coin1;
  if (Math.random() < 0.5) {
    coin1 = "heads";
  } else {
    coin1 = "tails";
  }

  // Second Coin Flip
  let coin2;
  if (Math.random() < 0.5) {
    coin2 = "heads";
  } else {
    coin2 = "tails";
  }

  // Third Coin Flip
  let coin3;
  if (Math.random() < 0.5) {
    coin3 = "heads";
  } else {
    coin3 = "tails";
  }

  // Output Results
  outputEl.innerHTML = `<img src="img/${coin1}.png"> <img src="img/${coin2}.png"> <img src="img/${coin3}.png">`;
}
