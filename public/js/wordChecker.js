function WordChecker(word, board) {
	this.possibleCombos = [];

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
		console.log("Just set up newPossibles array as empty array: ");
		console.log(newPossibles);
		for (var i=0; i<this.possibleCombos.length; i++) {
			var numLettersSoFar = 0;
			// go thru each possible combo and determine the number of letter so far
			for (var j=0; j<this.possibleCombos[i].length; j++) {
				numLettersSoFar += this.possibleCombos[i][j].face.length;
				console.log(numLettersSoFar + " came from adding this many letters: " + this.possibleCombos[i][j].face.length)
			}
			// then for each of the neighbors of the last die in the combo
			var lastDie = this.possibleCombos[i][this.possibleCombos[i].length-1]
			console.log("JS line 36:  Last Die:");
			console.log(lastDie.dom);
			for (var n=0; n<lastDie.neighbors.length ; n++) {
				console.log("neighbor # " + n + " is this face, " + lastDie.neighbors[n].face)
				var neighbor = lastDie.neighbors[n];
				if (neighbor.face === this.wordExcerpt(word, numLettersSoFar, neighbor.face.length)) {
					console.log("JS Line 45:  so we've got a match")
					var comboToPush = this.possibleCombos[i].push(neighbor);
					newPossibles.push(comboToPush);
					console.log("Here is the combo!");
					console.log(comboToPush);
					console.log(newPossibles);
				}
			}
		}
		console.log("at the end of the loop");
		console.log(newPossibles);
		this.possibles = newPossibles;
	}

}