const resetEL = document.querySelector(".reset");
const stopEl = document.querySelector(".stop");
const startEl = document.querySelector(".start");
const h2El = document.querySelector("h2");

//global variables
let interVal;
let timeLeft = 1500;

//functions
const startTime = function () {
  interVal = setInterval(() => {
    timeLeft--;
    let time = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    const timeFormat = `${time.toString().padStart(2, 0)}:${seconds
      .toString()
      .padStart(2, 0)}`;
    h2El.textContent = timeFormat;

    if (timeLeft === 0) {
      alert("time's Up");
      clearInterval(interVal);
      timeLeft = 1500;
    }
  }, 1000);
};

const stopTime = function () {
  clearInterval(interVal);
};
const resetTime = function () {
  clearInterval(interVal);
  timeLeft = 1500;
  h2El.textContent = "25:00";
};

//eventListeners
startEl.addEventListener("click", startTime);
stopEl.addEventListener("click", stopTime);
resetEL.addEventListener("click", resetTime);
