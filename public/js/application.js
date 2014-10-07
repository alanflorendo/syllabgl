$(document).ready(function() {
	b = new Board;
	dict = new Dictionary;
	b.putBoardInDOM();
	b.generateDiesNeighbors();

	isWord = function(word) {
		return dict.isARealWord(word);
	}

	wordShouldBeSoughtOnBoard = function (word) {
		if ( word.length < 3 || !isWord(word) ) {
			return false
		} else {
			return true;
		}
	}

	doWord = function() {
		b.highlightDice(b.dice, "lightgreen");
		var word = $("#boggle_word").val().toUpperCase();
		$("#boggle_word").val("");
		if ( wordShouldBeSoughtOnBoard(word) &&  !b.wordAlreadyGuessed(word)) {
			wc = new WordChecker(word, b);
			var dice = wc.checkWord();
			if (dice != false) {
				b.thisWordWorks(dice);
			}
		} else if ( !b.wordAlreadyGuessed(word) ) {
			b.rejectWord(word);
		}
	}

	$(document).keydown(function(event){
			k = event.keyCode
			if(k==13)  // enter key
				doWord()
			else
				$('#boggle_word').focus();
	})


});
