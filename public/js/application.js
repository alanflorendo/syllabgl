$(document).ready(function() {
	b = new Board;
	dict = new Dictionary;
	b.putBoardInDOM();
	b.generateDiesNeighbors();

	var isWord = function(word) {
		return dict.isARealWord(word);
	}

	var doWord = function() {
		var word = $("#boggle_word").val().toUpperCase();
		$("#boggle_word").val("");
		if (word.length < 3) {
			return false;
		}
		if (isWord(word)) {
			wc = new WordChecker(word, b);
			var dice = wc.checkWord();
			if (dice != false) {
				b.thisWordWorks(dice);
			}
		} else {
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
