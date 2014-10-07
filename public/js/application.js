$(document).ready(function() {
	b = new Board;
	b.putBoardInDOM();
	b.generateDiesNeighbors();

	var doWord = function() {
		var word = $("#boggle_word").val().toUpperCase();
		$("#boggle_word").val("");
		wc = new WordChecker(word, b);
		var dice = wc.checkWord();
		if (dice != false) {
			b.thisWordWorks(dice);
		}
	}

	$(document).keydown(function(event){
			k = event.keyCode
			if(k==13)
				doWord()
			else
				$('#boggle_word').focus();
	})


});
