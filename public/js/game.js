function Game() {
	var TIMELIMIT = 90;
	var BOARDSIZE = 5;
	var DICT = new Dictionary;

	this.gameOver = false;

	this.setupBoard = function() {
		this.bd = new Board(BOARDSIZE);
		this.bd.putBoardInDOM();
		this.bd.generateDiesNeighbors();
	}

	this.setupDict = function() {

	}

	this.isWord = function(word) {
		return dict.isARealWord(word);
	}

	this.wordShouldBeSoughtOnBoard = function(word) {
		if ( word.length < 3 || !this.isWord(word) ) {
			return false
		} else {
			return true;
		}
	}



}