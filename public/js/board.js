NORMALDICECOLOR = "linen";
HIGHLIGHTDICECOLOR = "pink";

	
function Board(faces, max_score, bdId) {
	SIDE = 5;
	this.faces = faces;
	this.max_score = max_score;
	// this.viable_words = viable_words;
	this.bdId = bdId
	this.turns = 0;
	this.allDice = [];
	this.score = 0;
	this.wordsGuessed = [];
	this.dice = [];
	this.allViableWords = [];

	this.generateDice = function() {
	  this.allDice = [];
	  this.dice = [];

	  for (var i=0; i<(SIDE * SIDE); i++){
	    newDie = new Die(this.faces[i]);
	    this.dice.push(newDie);
	    this.allDice.push(newDie);
	  }

	  return this.dice;
	}

	this.shuffleDice = function() {

	}

	this.generateDiesNeighbors = function() {
		var i = 0;
		for (var tr=1; tr<=5; tr++){ // go thru each row
			for (var td=1; td<=5; td++){ // go thru each col
				this.dice[i].findNeighbors(this);
				i += 1;
			}
		}

	}

	this.putBoardInDOM = function() {
		this.dice = this.generateDice();
		var i = 0;
		for (var tr=1; tr<=SIDE; tr++){ // go thru each row
			for (var td=1; td<=SIDE; td++){ // go thru each col
				var selector = '#board tr:nth-child(' + tr + ') td:nth-child(' + td +')'
				$(selector).html(this.dice[i].face);
				this.dice[i].tr = tr;
				this.dice[i].td = td;
				this.dice[i].dom = $(selector);

				i += 1;
			}
		}
	}

	this.findDie = function(row, col) {
		var i = 0;
		for (var tr=1; tr<=5; tr++){ // go thru each row
			for (var td=1; td<=5; td++){ // go thru each col
				if (this.dice[i].tr === row && this.dice[i].td === col)
					return this.dice[i];
				i += 1;
			}
		}
	}

	this.highlightDie = function(die, color) {
		$(die.dom).css("background-color", color);
	}

	this.highlightDice = function(dice, color) {
		for (var i=0; i<dice.length; i++) {
			this.highlightDie(dice[i], color);
		}
	}

	this.highlightDiceCollections = function(collection, color) {
		for (var i=0; i<collection.length; i++) {
			this.highlightDice(collection[i], color);
		}
	}

	this.diceToWord = function(dice) {
		wordChars = [];
		for (var i=0; i<dice.length; i++) {
			wordChars.push(dice[i].face)
		}
		return wordChars.join("");
	}

	this.addWordToDOMAndUpdateScore = function(word) {
		if (word.length === 3 && !g.gameOver) {
			$("#completed_words_3").append(word + ", ");
			this.score += 1;
		} else if (word.length === 4) {
			$("#completed_words_4").append(word + ", ");
			this.score += 2;
		} else {
			$("#completed_words_long").append(word + ", ");
			this.score += 3;
		}
		this.wordsGuessed.push(word);
		this.updateScore();
	}

	this.wordAlreadyGuessed = function(word) {
		if (this.wordsGuessed.indexOf(word) === -1) {
			return false
		} else {
			return true;
		}
	}

	this.updateScore = function() {
		$("#score_num").html(this.score);
	}

	this.thisWordWorks = function(word, diceCollections) {
		this.highlightDiceCollections(diceCollections, HIGHLIGHTDICECOLOR);
		if (!g.gameOver) 
			this.addWordToDOMAndUpdateScore(word);
	}

	this.rejectWord = function(word) {
		$("#not_words").append(word + ", ");
	}


}