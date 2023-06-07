function countdown(number, callback) {
  if (number >= 1) {
    document.getElementById("countdown").textContent = number;
    setTimeout(function () {
      countdown(number - 1, callback);
    }, 1000);
  } else {
    document.getElementById("countdown").textContent =
      "Happy Independence Day!";
    callback();
  }
}

function displayMessage() {
  console.log("Happy Independence Day!");
}

countdown(10, displayMessage);
