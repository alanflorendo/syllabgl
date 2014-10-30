function FakeBoard(object) {
	this.faces = object.faces;
}

// fakebd = {};

function Game() {
	var BOARDSIZE = 5;
	this.dict = new Dictionary;
	this.viableWords = [];
	this.boardInfo = {};

	this.timelimit = 90;
	this.gameOver = false;

	this.getBoardInfo = function() {
		var that = this;
		var call = $.ajax({
			type: "GET",
			url: "/game.json"
		})
		call.done(function(data) {
			that.bd = new Board(data.faces.split(","), data.max_score, data.id);
			console.log(data);
			that.bd.generateDice();
			that.bd.putBoardInDOM();
			that.bd.generateDiesNeighbors();
			that.dich = new DictChecker(that.dict, that.bd);
			console.log(data);
		})
	}

	this.getViableWords = function() {
		var that = this;
		var route = "/game/solution/" + that.bd.bdId + ".json"
		var call = $.ajax({
			type: "GET",
			url: route
		})
		call.done(function(data) {
			that.bd.allViableWords = data.viable_words;
			console.log(data);
		})
	}

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
		g.bd.highlightDice(g.bd.dice, NORMALDICECOLOR);
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
		$("#missed_words_list").html(this.bd.viable_words);
	}





}