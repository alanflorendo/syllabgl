// var isWaiting = false;
// var isRunning = false;
// var seconds = 10;
// var countdownTimer;
// var finalCountdown = false;

// function GameTimer() {
//     var minutes = Math.round((seconds - 30) / 60);
//     var remainingSeconds = seconds % 60;
//     if (remainingSeconds < 10) {
//         remainingSeconds = "0" + remainingSeconds;
//     }
//     document.getElementById('waiting_time').innerHTML = minutes + ":" + remainingSeconds;
//     if (seconds == 0) {
//         isRunning = true;
//         seconds += 2;

//         if (finalCountdown) {
//             clearInterval(countdownTimer); // Clear the interval to stop the loop
//         } else {
//             finalCountdown = true; // This will allow the 2 additional seconds only once.
//         }

//     } else {
//         isWaiting = true;
//         seconds--;
//     }
// }
// countdownTimer = setInterval(GameTimer, 1000);