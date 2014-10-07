	
function Board() {
	SIDE = 5
	var dice = [];

	this.generateDice = function() {
	  var lg = new LetterGenerator;

	  for (var i=0; i<(SIDE * SIDE); i++){
	    newDie = new Die(lg.getRandomFace());
	    dice.push(newDie);
	  }

	  return dice;
	}

	this.generateDiesNeighbors = function() {
		var i = 0;
		for (var tr=1; tr<=SIDE; tr++){ // go thru each row
			for (var td=1; td<=SIDE; td++){ // go thru each col
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
		for (var tr=1; tr<=SIDE; tr++){ // go thru each row
			for (var td=1; td<=SIDE; td++){ // go thru each col
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

	this.flashDice = function(dice) {
		for (var i=0; i<20; i++) {
			this.highlightDice(dice, "pink");
			this.highlightDice(dice, "lightgreen");
		}
	}

	this.diceToWord = function(dice) {
		wordChars = [];
		for (var i=0; i<dice.length; i++) {
			wordChars.push(dice[i].face)
		}
		return wordChars.join("");
	}

	this.addWordToDOM = function(word) {
		if (word.length === 3) {
			$("#completed_words_3").append(word + ", ");
		} else if (word.length === 4) {
			$("#completed_words_4").append(word + ", ");
		} else {
			$("#completed_words_long").append(word + ", ");
		}
	}

	this.thisWordWorks = function(diceCollections) {
		this.addWordToDOM(this.diceToWord(diceCollections[0]));
		this.highlightDiceCollections(diceCollections, "pink");;
	}

	this.rejectWord = function(word) {
		$("#not_words").append(word + ", ");
	}


}