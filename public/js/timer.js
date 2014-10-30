// var isWaiting = false;
// var isRunning = false;
// var seconds = 10;
// var countdownTimer;
// var finalCountdown = false;

function GameTimer(game) {
	this.seconds = game.timelimit;

	this.secondPassed = function() {
		if (this.seconds === 0 && !game.gameOver) {
			game.endGame();
		} else if (!game.gameOver) {
			this.seconds--;
			$("#timer_num").html(this.seconds);
			}
	} 
        
	var countdownTimer = setInterval('t.secondPassed()', 1000);
}
