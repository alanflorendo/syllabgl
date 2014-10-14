$(document).ready(function() {
	g = new Game;
	t = new GameTimer(g);
	g.setupBoard();
	dc = new DictChecker(g.dict, g.bd);

	$(document).keydown(function(event){
			k = event.keyCode
			if(k==13)  // enter key
				g.doWord()
			else
				$('#boggle_word').focus();
	})

	// dc.checkAllPossibleWords();
	g.viableWords = dc.viableWords;

});
