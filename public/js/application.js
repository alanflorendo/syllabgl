$(document).ready(function() {
	g = new Game;
	// b = new Board;
	t = new GameTimer(10, g);
	dict = new Dictionary;
	g.setupBoard();
	// b.putBoardInDOM();
	// b.generateDiesNeighbors();
	dc = new DictChecker(dict, g.bd);
	// var countdownTimer = setInterval('t.secondPassed()', 1000);

	// isWord = function(word) {
	// 	return dict.isARealWord(word);
	// }

	// wordShouldBeSoughtOnBoard = function (word) {
	// 	if ( word.length < 3 || !isWord(word) ) {
	// 		return false
	// 	} else {
	// 		return true;
	// 	}
	// }

	doWord = function() {
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

	$(document).keydown(function(event){
			k = event.keyCode
			if(k==13)  // enter key
				doWord()
			else
				$('#boggle_word').focus();
	})


});
