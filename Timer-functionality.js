// Set the number of seconds for the timer
const totalSeconds = 60;

// Initialize the timer
let timeRemaining = totalSeconds;

// Function to handle the timer
function startTimer() {
  // Update the time remaining every 1 second
  setInterval(function() {
    // Decrement the time remaining
    timeRemaining--;

    // Update the time remaining on the page
    document.getElementById("time-remaining").innerHTML = timeRemaining;

    // If the time reaches 0, play a beeping sound
    if (timeRemaining == 0) {
      const beep = new Audio("beep.mp3");
      beep.play();
    }
  }, 1000);
}

// Start the timer
startTimer();
