
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

	this.putBoardInDOM = function() {
		this.dice = this.generateDice();
		var i = 0;
		for (var tr=1; tr<=SIDE; tr++){ // go thru each row
			for (var td=1; td<=SIDE; td++){ // go thru each col
				var selector = '#board tr:nth-child(' + tr + ') td:nth-child(' + td +')'
				$(selector).html(this.dice[i].face);
				i += 1;
			}
		}
	}

}