function WordChecker(word, board) {
	this.possibleCombos = [];
	this.confirmedCombos = []

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
					this.possibleCombos.push([die]);
				}
			i += 1;
			}
		}
	}

	this.traceOutPossiblesOneDie = function() {
		var newPossibles = [];
		for (var i=0; i<this.possibleCombos.length; i++) {
			var numLettersSoFar = 0;
			// go thru each possible combo and determine the number of letter so far
			for (var j=0; j<this.possibleCombos[i].length; j++) {
				numLettersSoFar += this.possibleCombos[i][j].face.length;
				if (numLettersSoFar === word.length) {
					this.confirmedCombos[this.confirmedCombos.length] = clone(this.possibleCombos[i]);
				}
			}
			// then for each of the neighbors of the last die in the combo
			var lastDie = this.possibleCombos[i][this.possibleCombos[i].length-1]
			numNeighbors = lastDie.neighbors.length;
			for (var n=0; n<numNeighbors ; n++) {
				var neighbor = lastDie.neighbors[n];
				if (neighbor.face === this.wordExcerpt(word, numLettersSoFar, neighbor.face.length)) {
					var currentArray = clone(this.possibleCombos[i]); 
					currentArray[currentArray.length] = neighbor;
					newPossibles[newPossibles.length] = currentArray;
				}
			}
		}
		this.possibleCombos = newPossibles;
	}

}