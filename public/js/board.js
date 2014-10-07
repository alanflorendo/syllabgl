	
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

}