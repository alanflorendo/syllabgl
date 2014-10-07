function WordChecker(word, board) {
	this.possibileFirsts = [];

	this.wordExcerpt = function(word, start, len) {
		var chars = []
		for (var i=0; i<len; i++) {
			chars.push(word[start+i]);
		}	
		return chars.join("");
	}

	this.findPossibleFirsts = function() {
		var i = 0;
		for (var tr=1; tr<=SIDE; tr++){ // go thru each row
			for (var td=1; td<=SIDE; td++){ // go thru each col
				var die = board.dice[i]
				var textLength = die.face.length;
				if (die.face === this.wordExcerpt(word, 0, textLength)) {
					this.possibileFirsts.push(die);
				}
			i += 1;
			}
		}
	}



}