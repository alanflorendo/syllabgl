function Game() {
	var BOARDSIZE = 5;
	this.dict = new Dictionary;
	this.viableWords = [];

	this.timelimit = 90;
	this.gameOver = false;

	this.setupBoard = function() {
		this.bd = new Board(BOARDSIZE);
		this.bd.putBoardInDOM();
		this.bd.generateDiesNeighbors();
		this.dich = new DictChecker(this.dict, this.bd);
	}

	this.runDictChecker = function() {
		this.dich.checkAllPossibleWords();
	}

	this.isWord = function(word) {
		return this.dict.isARealWord(word);
	}

	this.wordShouldBeSoughtOnBoard = function(word) {
		if ( word.length < 3 || !this.isWord(word) ) {
			return false
		} else {
			return true;
		}
	}

	this.doWord = function() {
		g.bd.highlightDice(g.bd.dice, "lightgreen");
		var word = $("#boggle_word").val().toUpperCase();
		$("#boggle_word").val("");
		if ( g.wordShouldBeSoughtOnBoard(word) &&  !g.bd.wordAlreadyGuessed(word)) {
			wc = new WordChecker(word, g.bd);
			var dice = wc.checkWord();
			if (dice != false) {
				g.bd.thisWordWorks(word, dice);
			}
		} else if ( !g.bd.wordAlreadyGuessed(word) ) {
			g.bd.rejectWord(word);
		}
	}

	this.endGame = function() {
		this.gameOver = true;
	}





}