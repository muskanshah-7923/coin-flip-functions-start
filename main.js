// COIN FLIP SIMULATOR

// HTML ELement Variables
let outputEl = document.getElementById("output");

// Btn Click Event
document.getElementById("btn").addEventListener("click", btnHandler);

function btnHandler() {
  // First Coin Flip
  let coin1 = flipCoin();
 

  // Second Coin Flip
  let coin2 = flipCoin();

  // Third Coin Flip
  let coin3 = flipCoin();
  

  // Output Results
  outputEl.innerHTML = `<img src="img/${coin1}.png"> <img src="img/${coin2}.png"> <img src="img/${coin3}.png">`;
}


function flipCoin() {
  if (Math.random() < 0.5) {
    return "heads";
  } else {
    return "tails";
  }
}
let coin = flipCoin();
console.log(`You flipped ${coin}.`);
