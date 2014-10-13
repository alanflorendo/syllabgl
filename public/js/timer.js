// var isWaiting = false;
// var isRunning = false;
// var seconds = 10;
// var countdownTimer;
// var finalCountdown = false;

function GameTimer(game) {
    this.seconds = game.timelimit;

    this.nonNegativeTime = function() {
    	this.seconds--;
    	if (this.seconds < 0) {
    		return 0
            game.gameOver = true;
        }
        else
            return this.seconds;
    }

    this.secondPassed = function() {
      $("#timer_num").html(this.nonNegativeTime());
    } 
        
    var countdownTimer = setInterval('t.secondPassed()', 1000);
}
